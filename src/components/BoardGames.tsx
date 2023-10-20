import { useState } from "react";
import "./boardGames.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faStar } from "@fortawesome/free-solid-svg-icons";
import { faApple, faLinux, faWindows, faXbox } from "@fortawesome/free-brands-svg-icons";

export default function BoardGames() {
  return (
    <div className="board">
      <h1 className="headline">Games</h1>
      <div className="filters">
        <FilterGroup />
        <FilterGroup />
      </div>
      <div className="cardsBoard">
            <CardGame/>
            <CardGame/>
            <CardGame/>
            <CardGame/>
            <CardGame/>
            <CardGame/>
      </div>
    </div>
  );
}

function FilterGroup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select">
        <FontAwesomeIcon className="arrow" icon={isOpen ? faChevronUp: faChevronDown}/>
      <select onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
        <option>Опция 1</option>
        <option>Опция 2</option>
        <option>Опция 3</option>
      </select>
    </div>
  );
}

function CardGame(){
    return(
            <div className="cardGame">
                <div className="photoGame"></div>
                <div className="iconsSystems">
                    <FontAwesomeIcon className="iconSystem" icon={faWindows}/>
                    <FontAwesomeIcon className="iconSystem" icon={faApple} />
                    <FontAwesomeIcon className="iconSystem" icon={faLinux} />
                    <FontAwesomeIcon className="iconSystem" icon={faXbox} />
                    <div className="rating">
                        <p className="ratingText">9.5</p>
                        <FontAwesomeIcon className="star" icon={faStar} />
                    </div>
                </div>
            </div>
    );
}
