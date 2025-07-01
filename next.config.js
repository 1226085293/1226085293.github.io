/* eslint-disable @typescript-eslint/no-require-imports */
const { withContentlayer } = require('next-contentlayer2')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const ContentSecurityPolicy = `
      default-src *;
      script-src * 'unsafe-inline' 'unsafe-eval' blob: data:;
      style-src * 'unsafe-inline' blob: data:;
      img-src * blob: data:;
      media-src * blob:;
      connect-src *;
      font-src * data:;
      frame-src *;
    `

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  { key: 'Referrer-Policy', value: 'no-referrer' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

/* ──────────────────────────────────────────────────────────── */
/*  ② 其余配置保持不变                                          */
/* ──────────────────────────────────────────────────────────── */
const output = process.env.EXPORT ? 'export' : undefined
const basePath = process.env.BASE_PATH || undefined
const unoptimized = !!process.env.UNOPTIMIZED

/** @type {import('next/dist/next-server/server/config').NextConfig} */
module.exports = () => {
  const plugins = [withContentlayer, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), {
    output,
    basePath,
    reactStrictMode: true,
    trailingSlash: false,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: { dirs: ['app', 'components', 'layouts', 'scripts'] },
    images: {
      remotePatterns: [
        { protocol: 'https', hostname: '*' },
        // { protocol: 'https', hostname: 'forum.cocos.org' },
      ],
      unoptimized,
    },
    async headers() {
      return [{ source: '/(.*)', headers: securityHeaders }]
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  })
}
