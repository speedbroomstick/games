import Icon from "../Icon/Icon"
import './toolbar.scss'
import {PiMagnifyingGlassThin} from "react-icons/pi"
import { IInput, ISwither, IToolbar } from '../../models/models'

export default function Toolbar({onChange, changeTheme, theme}:IToolbar){
    
    return(
        <div className={theme? "toolbar toolbarDarkMode":"toolbar"}>            
            <Icon url="/game-icon.svg"/>
            <SearchInput onChange={onChange} />
            <Switcher changeTheme={changeTheme}/>
        </div>
    )
} 

function SearchInput({onChange}:IInput){
    return(
        <div className="inputSearch">
            <PiMagnifyingGlassThin className="glass" />
            <input className="search" type="text" onChange={(e)=>onChange(e.target.value)} placeholder="Search games..."/>
        </div>
    )
}

function Switcher({changeTheme}:ISwither){
    return(
        <div className="switch">
            <input type="checkbox" onChange={e => changeTheme(e.target.checked)}></input>
            <label className="labelSwitch">Dark Mode</label>
        </div>        
    )
}