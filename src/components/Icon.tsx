import './icon.scss'

interface Props{
    url: string;
}

export default function Icon({url}:Props){
    return(
        <div className="icon">{url}</div>
    )
}