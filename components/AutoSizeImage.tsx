'use client'

import { useState, useEffect } from 'react'
import NextImage, { ImageProps } from 'next/image'

interface AutoSizeImageProps extends ImageProps {
  src: string
}

export default function AutoSizeImage({
  src,
  alt = '',
  width,
  height,
  ...props
}: AutoSizeImageProps) {
  const [dimensions, setDimensions] = useState<{
    width: number
    height: number
  } | null>(null)

  // 代理URL处理
  const proxySrc = src.startsWith('http') ? `/api/proxy-image?url=${encodeURIComponent(src)}` : src

  useEffect(() => {
    // 如果已知原始尺寸，直接使用
    if (width && height) {
      setDimensions({
        width: Number(width),
        height: Number(height),
      })
      return
    }

    const img = new window.Image()
    img.src = proxySrc

    img.onload = () => {
      setDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight,
      })
    }

    img.onerror = () => {
      setDimensions({ width: 50, height: 50 })
    }

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [proxySrc, width, height])

  return dimensions ? (
    <NextImage src={src} alt={alt} width={dimensions.width} height={dimensions.height} {...props} />
  ) : (
    <div className="absolute inset-0 animate-pulse bg-gray-100" />
  )
}
