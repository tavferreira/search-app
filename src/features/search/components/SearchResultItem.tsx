import React from 'react'
import styled from 'styled-components'
import { BookDocument } from '@/features/search/api/openLibraryApi'

const ItemWrapper = styled.li<{ $isHighlighted?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isHighlighted ? '#f0f4f8' : 'transparent'};
  border-bottom: 1px solid #eee;
  transition: background-color 0.15s ease-in-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`

const Image = styled.img`
  flex-shrink: 0;
  width: 40px;
  height: 50px;
  margin-right: 1rem;
  object-fit: cover;
  background-color: #eee;
  border-radius: 2px;
`

const TextContent = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 0.1rem;
  overflow: hidden;
`

const TitleLink = styled.a`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  font-weight: 600;
  color: #212529;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    color: #0d6efd;
    text-decoration: underline;
  }
`

const Author = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.85rem;
  color: #6c757d;
  white-space: nowrap;
`

const PublishYear = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #868e96;
`

interface SearchResultItemProps {
  book: BookDocument
  isHighlighted?: boolean
  id?: string
}

const generateAmazonSearchUrl = (book: BookDocument): string => {
  const baseUrl = 'https://www.amazon.com/s?i=stripbooks'
  const rhParams: string[] = []

  rhParams.push(`p_28:${encodeURIComponent(book.title)}`)

  if (book.author_name && book.author_name.length > 0) {
    rhParams.push(`p_27:${encodeURIComponent(book.author_name[0])}`)
  }

  if (book.isbn && book.isbn.length > 0) {
    const isbnSearchTerm = book.isbn.join('|')
    rhParams.push(`p_66:${encodeURIComponent(isbnSearchTerm)}`)
  }

  const rhValue = rhParams.join(',')

  return `${baseUrl}&rh=${rhValue}&s=relevancerank`
}

const SearchResultItemComponent = ({ book }: SearchResultItemProps) => {
  const displayAuthors =
    book.author_name && book.author_name.length > 0
      ? `by ${book.author_name.join(', ')}`
      : 'Author unknown'
  const amazonUrl = generateAmazonSearchUrl(book)

  return (
    <ItemWrapper>
      <Image
        src={book.imageUrl}
        alt={`Cover for ${book.title}`}
        loading="lazy"
        onError={(e) =>
          (e.currentTarget.src = 'https://placehold.co/40x50/eee/ccc?text=N/A')
        }
      />
      <TextContent>
        <TitleLink
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={book.title}
        >
          {book.title}
        </TitleLink>
        <Author title={book.author_name?.join(', ')}>{displayAuthors}</Author>
        {book.first_publish_year && (
          <PublishYear>First published: {book.first_publish_year}</PublishYear>
        )}
      </TextContent>
    </ItemWrapper>
  )
}

export const SearchResultItem = React.memo(SearchResultItemComponent)
