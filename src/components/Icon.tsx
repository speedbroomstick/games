import { Iicon } from '../models/models';
import './icon.scss'

export default function Icon({url, children,size={width:4,height:4}, margin=0,animation=false}:Iicon){
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