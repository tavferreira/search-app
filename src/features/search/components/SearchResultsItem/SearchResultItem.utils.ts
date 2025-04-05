import { BookDocument } from '@/features/search/api/openLibraryApi'

export const generateAmazonSearchUrl = (book: BookDocument): string => {
  const baseUrl = 'https://www.amazon.com/s?i=stripbooks'
  const rhParams: string[] = []

  if (book.title) {
    rhParams.push(`p_28:${encodeURIComponent(book.title)}`)
  }

  if (book.author_name && book.author_name.length > 0) {
    rhParams.push(`p_27:${encodeURIComponent(book.author_name[0])}`)
  }

  if (book.isbn && book.isbn.length > 0) {
    const isbnSearchTerm = book.isbn.join('|')
    rhParams.push(`p_66:${encodeURIComponent(isbnSearchTerm)}`)
  }

  if (rhParams.length > 0) {
    const rhValue = rhParams.join(',')
    return `${baseUrl}&rh=${rhValue}&s=relevancerank`
  }

  if (book.title) {
    return `${baseUrl}&k=${encodeURIComponent(book.title)}`
  }

  return baseUrl
}
