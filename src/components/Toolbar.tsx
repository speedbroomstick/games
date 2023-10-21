import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Icon from "./Icon"
import './toolbar.scss'

interface Toolbar{
    onChange(value:string):void;
}

export default function Toolbar({onChange}:Toolbar){
    
    return(
        <div className="toolbar">            
            <Icon url="/game-icon.svg"/>
            <SearchInput onChange={onChange} />
            <Switcher/>
        </div>
    )
} 

function SearchInput({onChange}:Toolbar){
    return(
        <div className="inputSearch">
            <FontAwesomeIcon className='glass' icon={faMagnifyingGlass} />
            <input className="search" type="text" onChange={(e)=>onChange(e.target.value)} placeholder="Search games..."/>
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