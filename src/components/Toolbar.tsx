import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Icon from "./Icon"
import './toolbar.scss'

export default function Toolbar(){
    return(
        <div className="toolbar">            
            <Icon url="../assets/game-icon.svg"/>
            <SearchInput/>
            <Switcher/>
        </div>
    )
} 

function SearchInput(){
    return(
        <div className="inputSearch">
            <FontAwesomeIcon className='glass' icon={faMagnifyingGlass} />
            <input className="search" type="text" placeholder="Search games..."/>
        </div>
    )
}

function Switcher(){
    return(
        <div className="switch">
            <input type="checkbox"></input>
            <label className="labelSwitch">Dark Mode</label>
        </div>        
    )
}