import Head from 'next/head'
export default function Admin() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Content Manager</title>
        <link rel="cms-config-url" href="/admin/config.yml" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" async />
        <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" async />
      </Head>
      <main id="cms" />
    </>
  )
}
