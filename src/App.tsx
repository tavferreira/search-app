import { useState, Fragment, useEffect } from 'react'
import { useSearchBooksQuery } from './features/search/api/openLibraryApi'
import GlobalStyle from './styles/GlobalStyle'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = useSearchBooksQuery(searchTerm)

  useEffect(() => {
    setSearchTerm('the+lord+of+the+rings')
  }, [])

  return (
    <>
      <GlobalStyle />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          {data.docs.map((doc) => (
            <Fragment key={doc.key}>
              <h3>{doc.title}</h3>
              <img src={doc.imageUrl} alt={doc.title} />
              {doc.author_name} - {doc.first_publish_year}
            </Fragment>
          ))}
        </div>
      ) : null}
    </>
  )
}

export default App
