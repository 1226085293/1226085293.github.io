// pages/admin/index.tsx

import { useEffect } from 'react'
import Head from 'next/head'

interface NetlifyIdentity {
  on: (event: string, callback: (user: any) => void) => void // Update here
  // Add other properties and methods as needed
}

declare global {
  interface Window {
    netlifyIdentity: NetlifyIdentity
  }
}

const CMSPage: React.FC = () => {
  useEffect(() => {
    // Initialize Netlify Identity
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Content Manager</title>
        <script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js" async></script>
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </Head>
      <main id="cms" />
    </>
  )
}

export default CMSPage
