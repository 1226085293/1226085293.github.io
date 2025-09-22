// app\test\page.tsx
'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'

// PBR贴图通道类型
type Channel = 'ao' | 'roughness' | 'metalness'
type FileData = { file: File | null; url: string }

export default function PBRGenerator() {
  // 存储各通道文件和数据
  const [channels, setChannels] = useState<Record<Channel, FileData>>({
    ao: { file: null, url: '' },
    roughness: { file: null, url: '' },
    metalness: { file: null, url: '' },
  })

  // 追踪每个通道的拖拽状态
  const [dragOver, setDragOver] = useState<Record<Channel, boolean>>({
    ao: false,
    roughness: false,
    metalness: false,
  })

  // 用于延迟清理拖拽状态
  const dragTimeout = useRef<Record<Channel, NodeJS.Timeout | null>>({
    ao: null,
    roughness: null,
    metalness: null,
  })

  const [isCombining, setIsCombining] = useState(false)
  const fileInputRefs = {
    ao: useRef<HTMLInputElement>(null),
    roughness: useRef<HTMLInputElement>(null),
    metalness: useRef<HTMLInputElement>(null),
  }

  // 处理文件选择
  const handleFileSelect = (channel: Channel) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) updateChannel(channel, file)
  }

  // 处理拖拽上传（放下）
  const handleDrop = (channel: Channel) => (e: React.DragEvent) => {
    e.preventDefault()
    if (dragTimeout.current[channel]) clearTimeout(dragTimeout.current[channel]!)
    setDragOver((prev) => ({ ...prev, [channel]: false }))
    const file = e.dataTransfer.files[0]
    if (file) updateChannel(channel, file)
  }

  // 拖拽持续进入容器（解决子元素干扰）
  const handleDragOver = (channel: Channel) => (e: React.DragEvent) => {
    e.preventDefault()
    if (dragOver[channel]) return
    setDragOver((prev) => ({ ...prev, [channel]: true }))
  }

  // 延迟判断是否真的离开
  const handleDragLeave = (channel: Channel) => (e: React.DragEvent) => {
    e.preventDefault()
    if (dragTimeout.current[channel]) clearTimeout(dragTimeout.current[channel]!)
    dragTimeout.current[channel] = setTimeout(() => {
      setDragOver((prev) => ({ ...prev, [channel]: false }))
    }, 50)
  }

  // 更新通道状态
  const updateChannel = (channel: Channel, file: File | null) => {
    const fileInput = fileInputRefs[channel].current
    if (!file) {
      if (fileInput) {
        fileInput.value = ''
      }
    }

    const newUrl = file ? URL.createObjectURL(file) : ''
    setChannels((prev) => ({
      ...prev,
      [channel]: { file, url: newUrl },
    }))
  }

  // 生成PBR贴图
  const generatePBR = async () => {
    setIsCombining(true)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    const width = 1024
    const height = 1024

    canvas.width = width
    canvas.height = height
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)

    const images = await Promise.all(
      Object.entries(channels).map(async ([channel, { url }]) => {
        if (!url) return null
        const img = await new Promise<HTMLImageElement>((resolve) => {
          const image = new window.Image()
          image.crossOrigin = 'anonymous'
          image.onload = () => resolve(image)
          image.src = url
        })
        return { channel, img: img }
      })
    )

    images.forEach((data) => {
      const { channel, img } = data || {}
      if (!img) return
      ctx.globalCompositeOperation = 'lighter'
      switch (channel) {
        case 'ao':
          ctx.drawImage(img, 0, 0, width, height)
          ctx.fillStyle = 'rgba(255, 0, 0, 1)'
          break
        case 'roughness':
          ctx.globalCompositeOperation = 'source-over'
          ctx.drawImage(img, 0, 0, width, height)
          ctx.globalCompositeOperation = 'lighter'
          ctx.fillStyle = 'rgba(0, 255, 0, 1)'
          break
        case 'metalness':
          ctx.globalCompositeOperation = 'source-over'
          ctx.drawImage(img, 0, 0, width, height)
          ctx.globalCompositeOperation = 'lighter'
          ctx.fillStyle = 'rgba(0, 0, 255, 1)'
          break
      }
      ctx.fillRect(0, 0, width, height)
    })

    canvas.toBlob((blob) => {
      if (!blob) return
      const downloadUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = 'pbr_combined.png'
      a.click()
      setIsCombining(false)
    }, 'image/png')
  }

  return (
    <div className="mx-auto min-h-screen max-w-5xl p-8 transition-colors">
      <h1 className="mb-6 text-center text-3xl font-bold dark:text-white">PBR贴图生成器</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {(['ao', 'roughness', 'metalness'] as const).map((channel) => (
          <div
            key={channel}
            className={`rounded-lg border-2 border-dashed ${
              dragOver[channel] ? 'border-blue-500' : 'border-gray-300 dark:border-gray-600'
            } p-4 transition-colors duration-150`}
            onDragOver={handleDragOver(channel)}
            onDragLeave={handleDragLeave(channel)}
            onDrop={handleDrop(channel)}
          >
            <h2 className="mb-2 text-xl font-semibold capitalize dark:text-white">
              {channel === 'ao'
                ? '环境光遮蔽 (AO)'
                : channel === 'roughness'
                  ? '粗糙度 (Roughness)'
                  : '金属度 (Metallic)'}
              <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                (可选)
              </span>
            </h2>

            {/* 拖拽上传区域 */}
            <div
              className={`relative flex h-40 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 ${
                channels[channel].url ? 'border-0' : ''
              }`}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => {
                fileInputRefs[channel].current?.click()
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  fileInputRefs[channel].current?.click()
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`上传 ${channel} 贴图`}
            >
              {/* 清除按钮 (X) */}
              {channels[channel].url && (
                <button
                  type="button"
                  className="absolute top-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-red-600"
                  onClick={(e) => {
                    e.stopPropagation()
                    updateChannel(channel, null)
                  }}
                  aria-label="清除贴图"
                >
                  ×
                </button>
              )}

              {channels[channel].url ? (
                <Image
                  src={channels[channel].url}
                  alt={channel}
                  width={160}
                  height={160}
                  className="max-h-full rounded object-contain"
                  unoptimized // blob URL 需要这个
                />
              ) : (
                <span className="text-gray-500 dark:text-gray-400">拖拽图片至此 或 点击上传</span>
              )}
            </div>

            {/* 隐藏文件输入 */}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRefs[channel]}
              onChange={handleFileSelect(channel)}
            />
            <div className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              支持 PNG/JPG/WebP
            </div>
          </div>
        ))}
      </div>

      {/* 生成按钮 */}
      <div className="mt-8 text-center">
        <button
          onClick={generatePBR}
          disabled={!Object.values(channels).some((c) => c.file)}
          className={`rounded-lg px-6 py-2 font-medium text-white transition ${
            Object.values(channels).some((c) => c.file)
              ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600'
              : 'cursor-not-allowed bg-gray-400 dark:bg-gray-600'
          }`}
        >
          {isCombining ? '生成中...' : '下载合成贴图'}
        </button>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          生成的PBR贴图：R=AO, G=Roughness, B=Metallic
        </p>
      </div>

      {/* 说明文档 */}
      <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h3 className="mb-2 text-lg font-semibold dark:text-white">使用说明</h3>
        <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
          <li>至少上传一个贴图，未上传的通道默认为黑色（值为0）</li>
          <li>拖动图片到对应区域或点击区域选择文件</li>
          <li>
            生成的贴图遵循标准PBR规范：
            <br />
            <span className="font-medium">R通道=环境光遮蔽, G通道=粗糙度, B通道=金属度</span>
          </li>
          <li>支持大多数游戏引擎（Unity/Unreal/Blender等）</li>
        </ul>
      </div>
    </div>
  )
}
