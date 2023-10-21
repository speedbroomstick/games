import './App.scss'
import Toolbar from './components/Toolbar'
import Genres from './components/Genres'
import BoardGames from './components/BoardGames'
import { useState } from 'react'

export default function App() {
  const [searchText, setSearchText] = useState("");
  const handleSearchTextChange = (newValue: string) => {
    setSearchText(newValue);
  }

  return (
    <div className="wrapper">
      <Toolbar onChange={handleSearchTextChange}/>
      <div className="content">
        <Genres></Genres>
        <BoardGames inputText={searchText}></BoardGames>
      </div>
    </div>    
    
  )
}