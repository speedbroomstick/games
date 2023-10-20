import './App.scss'
import Toolbar from './components/Toolbar'
import Genres from './components/Genres'
import BoardGames from './components/BoardGames'

export default function App() {
  return (
    <div className="wrapper">
      <Toolbar/>
      <div className="content">
        <Genres></Genres>
        <BoardGames></BoardGames>
      </div>
    </div>    
    
  )
}