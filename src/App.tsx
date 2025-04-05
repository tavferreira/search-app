import { TopBar } from '@/components/TopBar'
import GlobalStyle from '@/styles/GlobalStyle'
import { Search } from '@/features/search/Search'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <TopBar>
        <Search />
      </TopBar>
    </>
  )
}
