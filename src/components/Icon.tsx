import './icon.scss'

interface Props{
    url: string;
    children?: string;
    size?: {
        width: number;
        height: number;
    };
    margin?: number;
    animation?:boolean;
}

export default function Icon({url, children,size={width:3,height:3}, margin=0,animation=false}:Props){
    const iconStyle = {
        backgroundImage: `url(${url})`,
        width: `${size.width}vw`,
        height: `${size.height}vw`
    };

    return(
        <div className="containerIcon" style={{marginBottom:`${margin}vw`}}>
            <div className={animation ? 'icon animation' : 'icon'} style={iconStyle}></div>
            { children ? <p className='textIcon'>{children}</p>:null}
        </div>
    )
}