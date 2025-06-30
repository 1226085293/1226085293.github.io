'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(true)
  const { resolvedTheme } = useTheme()

  if (!siteMetadata.comments?.provider) {
    return null
  }
  let commentsConfigWithDarkTheme = siteMetadata.comments

  if (siteMetadata.comments.provider === 'giscus' && siteMetadata.comments.giscusConfig) {
    commentsConfigWithDarkTheme = {
      ...siteMetadata.comments,
      giscusConfig: {
        ...siteMetadata.comments.giscusConfig,
        theme:
          resolvedTheme === 'dark'
            ? siteMetadata.comments.giscusConfig.darkTheme
            : siteMetadata.comments.giscusConfig.theme,
      },
    }
  }
  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={commentsConfigWithDarkTheme} slug={slug} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
