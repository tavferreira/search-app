import { BookDocument } from '@/features/search/api/openLibraryApi'
import { ItemWrapper } from './SearchResultItem.styles'
import { generateAmazonSearchUrl } from './SearchResultItem.utils'
import { BookImage } from './BookImage'
import { BookDetails } from './BookDetails'

interface SearchResultItemViewProps {
  book: BookDocument
  isHighlighted?: boolean
  id?: string
}

export const SearchResultItemView = ({
  book,
  isHighlighted,
  id,
}: SearchResultItemViewProps) => {
  const amazonUrl = generateAmazonSearchUrl(book)

  return (
    <ItemWrapper
      $isHighlighted={isHighlighted}
      id={id}
      role="option"
      aria-selected={isHighlighted}
    >
      <BookImage src={book.imageUrl} alt={`Cover for ${book.title}`} />
      <BookDetails
        title={book.title}
        amazonUrl={amazonUrl}
        authors={book.author_name}
        publishYear={book.first_publish_year}
      />
    </ItemWrapper>
  )
}
