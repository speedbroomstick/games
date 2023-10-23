import './App.scss'
import Toolbar from './components/Toolbar/Toolbar'
import Genres from './components/Genres/Genres'
import BoardGames from './components/BoardGames/BoardGames'
import { useState } from 'react'

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [theme,setTheme] = useState(true);

  const handleSearchTextChange = (newValue: string) => {
    setSearchText(newValue);
  }

  return (
    <div className={theme ? "wrapper wrraperBlackTheme" : "wrapper"}>
      <Toolbar theme={theme} onChange={handleSearchTextChange} changeTheme={setTheme}/>
      <div className="content">
        <Genres></Genres>
        <BoardGames inputText={searchText}></BoardGames>
      </div>
    </div>    
    
  )
}