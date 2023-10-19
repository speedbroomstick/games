import './icon.scss'

interface Props{
    url: string;
    children?: string;
}

export default function Icon({url, children}:Props){
    return(
        <div className="containerIcon">
            <div className="icon" style={{ backgroundImage: `url(${url})` }}></div>
            { children ? <p className='textIcon'>{children}</p>:null}
        </div>
    )
}