import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import AutoSizeImage from './AutoSizeImage'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  AutoSizeImage: ({ src, alt, title, ...props }) => (
    <div className="my-4">
      <AutoSizeImage src={src} alt={alt || ''} title={title} {...props} />
    </div>
  ),
}
