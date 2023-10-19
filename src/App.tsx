import './App.scss'
import Toolbar from './components/Toolbar'
import Genres from './components/Genres'

export default function App() {
  return (
    <div className="wrapper">
      <Toolbar/>
      <div className="content">
        <Genres></Genres>
      </div>
    </div>    
    
  )
}