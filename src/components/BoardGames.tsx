import { useState } from "react";
import "./boardGames.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { faApple, faLinux, faWindows, faXbox } from "@fortawesome/free-brands-svg-icons";
import gameDate from "../data/games.json"

interface Game{
    id?:number;
    name:string;
    rating:number;
    url:string;
    genre?:string;
    platform:{
        apple:boolean,
        linux:boolean,
        xbox:boolean,
        windows:boolean
    }
    date?:string;
}
export default function BoardGames() {
    return (
        <div className="board">
            <h1 className="headline">Games</h1>
            <div className="filters">
                <FilterGroup />
                <FilterGroup />
            </div>
            <div className="cardsBoard">
            {gameDate.map((game) => (
                            <CardGame name={game.name} rating={game.rating} url={game.url} platform={game.platform} />
            ))}
            </div>
        </div>
    );
}

function FilterGroup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="custom-select">
            <FontAwesomeIcon className="arrow" icon={isOpen ? faChevronUp : faChevronDown} />
            <select onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
                <option>Опция 1</option>
                <option>Опция 2</option>
                <option>Опция 3</option>
            </select>
        </div>
    );
}

function CardGame({name,rating,url,platform}:Game) {
    return (
                <div className="cardGame">
                    <div className="photoGame" style={{backgroundImage: `url(${url})`}}></div>
                    <div className="iconsSystems">
                        {platform.apple?<FontAwesomeIcon className="iconSystem" icon={faApple} /> : null}
                        {platform.windows?<FontAwesomeIcon className="iconSystem" icon={faWindows} />: null}
                        {platform.linux?<FontAwesomeIcon className="iconSystem" icon={faLinux} />:null}
                        {platform.xbox?<FontAwesomeIcon className="iconSystem" icon={faXbox} />:null}
                        <div className="rating">
                            <p className="ratingText">{rating}</p>
                            <FontAwesomeIcon className="star" icon={faStar} />
                        </div>
                    </div>
                    <h1 className="gameName">{name}</h1>
                </div>
    );
}
