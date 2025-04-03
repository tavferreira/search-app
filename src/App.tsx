import { useState, Fragment, useEffect } from 'react'
import { useSearchBooksQuery } from './features/api/openLibraryApi'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isLoading } = useSearchBooksQuery(searchTerm)

  useEffect(() => {
    setSearchTerm('the+lord+of+the+rings')
  }, [])

  return (
    <div className="App">
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
    </div>
  )
}

export default App
