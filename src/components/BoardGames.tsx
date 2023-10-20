import { useState } from "react";
import "./boardGames.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function BoardGames() {
  return (
    <div className="board">
      <h1 className="headline">Games</h1>
      <div className="filters">
        <FilterGroup />
        <FilterGroup />
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
