'use client'
import { useState, useRef } from 'react'

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

  // 处理拖拽上传
  const handleDrop = (channel: Channel) => (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) updateChannel(channel, file) // 确保只有文件存在时调用
  }

  // 更新通道状态
  const updateChannel = (channel: Channel, file: File) => {
    const url = URL.createObjectURL(file)
    setChannels((prev) => ({
      ...prev,
      [channel]: { file, url },
    }))
  }

  // 生成PBR贴图
  const generatePBR = async () => {
    setIsCombining(true)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    const width = 1024 // 默认生成1K贴图
    const height = 1024

    // 初始化画布
    canvas.width = width
    canvas.height = height
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, width, height)

    // 合成通道
    const images = await Promise.all(
      Object.entries(channels).map(async ([channel, { url }]) => {
        if (!url) return null
        const img = await new Promise<HTMLImageElement>((resolve) => {
          const img = new Image()
          img.crossOrigin = 'anonymous'
          img.onload = () => resolve(img)
          img.src = url
        })
        return { channel, img }
      })
    )

    images.forEach((data) => {
      const { channel, img } = data || {}
      if (!img) return
      ctx.globalCompositeOperation = 'lighter' // 使用加法混合
      switch (channel) {
        case 'ao':
          ctx.drawImage(img, 0, 0, width, height)
          ctx.fillStyle = 'rgba(255, 0, 0, 1)' // R通道
          break
        case 'roughness':
          ctx.globalCompositeOperation = 'source-over'
          ctx.drawImage(img, 0, 0, width, height)
          ctx.globalCompositeOperation = 'lighter'
          ctx.fillStyle = 'rgba(0, 255, 0, 1)' // G通道
          break
        case 'metalness':
          ctx.globalCompositeOperation = 'source-over'
          ctx.drawImage(img, 0, 0, width, height)
          ctx.globalCompositeOperation = 'lighter'
          ctx.fillStyle = 'rgba(0, 0, 255, 1)' // B通道
          break
      }
      ctx.fillRect(0, 0, width, height)
    })

    // 导出结果
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
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-center text-3xl font-bold">PBR贴图生成器</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {(['ao', 'roughness', 'metalness'] as const).map((channel) => (
          <div key={channel} className="rounded-lg border-2 border-dashed border-gray-300 p-4">
            <h2 className="mb-2 text-xl font-semibold capitalize">
              {channel === 'ao'
                ? '环境光遮蔽 (AO)'
                : channel === 'roughness'
                  ? '粗糙度 (Roughness)'
                  : '金属度 (Metallic)'}
              <span className="ml-2 text-sm font-normal text-gray-500">(可选)</span>
            </h2>

            {/* 拖拽上传区域 */}
            <div
              className={`relative flex h-40 cursor-pointer items-center justify-center rounded-md bg-gray-50 ${
                channels[channel].url ? 'border-0' : 'border border-gray-300'
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop(channel)}
            >
              {/* 清除按钮 (X) */}
              {channels[channel].url && (
                <button
                  type="button"
                  className="absolute top-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-red-600"
                  onClick={(e) => {
                    e.stopPropagation() // 防止触发父元素的点击事件
                    updateChannel(channel, null as unknown as File) // 传递null清除
                  }}
                  aria-label="清除贴图"
                >
                  ×
                </button>
              )}

              {/* 原有的拖拽/图片内容 */}
              {channels[channel].url ? (
                <img src={channels[channel].url} alt={channel} className="max-h-full rounded" />
              ) : (
                <span className="text-gray-500">拖拽图片至此 或 点击上传</span>
              )}
            </div>

            {/* 文件选择按钮 */}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRefs[channel]}
              onChange={handleFileSelect(channel)}
            />
            <div className="mt-2 text-center text-sm text-gray-500">支持 PNG/JPG/WebP</div>
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
              ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
              : 'cursor-not-allowed bg-gray-400'
          }`}
        >
          {isCombining ? '生成中...' : '下载合成贴图'}
        </button>
        <p className="mt-2 text-sm text-gray-500">生成的PBR贴图：R=AO, G=Roughness, B=Metallic</p>
      </div>

      {/* 说明文档 */}
      <div className="mt-12 rounded-lg bg-gray-50 p-6">
        <h3 className="mb-2 text-lg font-semibold">使用说明</h3>
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
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
