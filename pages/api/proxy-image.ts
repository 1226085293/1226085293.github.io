import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'Missing image URL' })
  }

  try {
    const imageRes = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        Accept: 'image/*',
      },
    })

    if (!imageRes.ok) {
      throw new Error(`Failed to fetch image: ${imageRes.status}`)
    }

    // 转发正确的 Content-Type
    res.setHeader('Content-Type', imageRes.headers.get('Content-Type') || 'image/png')
    // 缓存 1 天
    res.setHeader('Cache-Control', 'public, max-age=86400')

    // 流式传输图片数据
    const imageBuffer = await imageRes.arrayBuffer()
    res.send(Buffer.from(imageBuffer))
  } catch (error) {
    console.error('Proxy error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
