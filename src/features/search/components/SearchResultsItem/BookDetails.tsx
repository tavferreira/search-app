import {
  TextContent,
  TitleLink,
  Author,
  PublishYear,
} from './SearchResultItem.styles'

interface BookDetailsProps {
  title: string
  amazonUrl: string
  authors?: string[]
  publishYear?: number
}

export const BookDetails = ({
  title,
  amazonUrl,
  authors,
  publishYear,
}: BookDetailsProps) => {
  const displayAuthors =
    authors && authors.length > 0
      ? `by ${authors.join(', ')}`
      : 'Author unknown'

  return (
    <TextContent>
      <TitleLink
        href={amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        {title}
      </TitleLink>
      <Author title={authors?.join(', ')}>{displayAuthors}</Author>
      {publishYear && <PublishYear>First published: {publishYear}</PublishYear>}
    </TextContent>
  )
}
