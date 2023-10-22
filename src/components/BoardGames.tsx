import { useEffect, useState } from "react";
import "./boardGames.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faLinux,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import gameDateJson from "../data/games.json";
import { BoardGamesProps, Game, IFilterGroup } from "../models/models";

export default function BoardGames({ inputText }: BoardGamesProps) {

  const [gameDate, setGameDate] = useState<Game[]>(gameDateJson);
  const [filterAtribute, setFilterAtribute] = useState("");
  const [filterOption, SetFilterOption] = useState(""); 

  useEffect(() => {
      const filteredGames = gameDateJson.filter((game) => {
        return  game.name.toLowerCase().includes(inputText.toLowerCase());
    });
      inputText ? setGameDate(filteredGames): setGameDate(gameDateJson);
  }, [inputText]);
  
  useEffect(()=>{
      const filteredGames = gameDateJson.filter((game)=>{
        return game.platform[filterAtribute as keyof Game["platform"]] === true;
      });
      filterAtribute ? setGameDate(filteredGames): setGameDate(gameDateJson);
  },[filterAtribute])

  useEffect(()=>{
    if(filterOption === "By Rating"){
    const sortedGames = [...gameDateJson];
    sortedGames.sort((a, b) => b.rating - a.rating);
    setGameDate(sortedGames);
    }else if(filterOption === "By Date"){
      const sortedGames = [...gameDateJson];
      sortedGames.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setGameDate(sortedGames);
    }
},[filterOption])

  return (
    <div className="board">
      <h1 className="headline">Games</h1>
      <div className="filters">
        <FilterGroup onChangeFilter={setFilterAtribute} options={["xbox","windows","apple","linux"]}/>
        <FilterGroup onChangeFilter={SetFilterOption} options={["By Rating","By Date"]} /> 
      </div>
      <div className="cardsBoard">
        {gameDate.map((game) => (
          <CardGame 
          key={game.id}  
          name={game.name}
            rating={game.rating}
            url={game.url}
            platform={game.platform}
          />
        ))}
      </div>
    </div>
  );
}

function FilterGroup({options, onChangeFilter}:IFilterGroup) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select">
      <FontAwesomeIcon
        className="arrow"
        icon={isOpen ? faChevronUp : faChevronDown}
      />
      <select onChange={e => onChangeFilter(e.target.value)} onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)}>
        <option value="" disabled selected hidden>Choose option</option>
        {options.map(option=>(
                  <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function CardGame({ name, rating, url, platform }: Game) {
  return (
    <div className="cardGame">
      <div
        className="photoGame"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className="iconsSystems">
        {platform.apple ? (
          <FontAwesomeIcon className="iconSystem" icon={faApple} />
        ) : null}
        {platform.windows ? (
          <FontAwesomeIcon className="iconSystem" icon={faWindows} />
        ) : null}
        {platform.linux ? (
          <FontAwesomeIcon className="iconSystem" icon={faLinux} />
        ) : null}
        {platform.xbox ? (
          <FontAwesomeIcon className="iconSystem" icon={faXbox} />
        ) : null}
        <div className="rating">
          <p className="ratingText">{rating}</p>
          <FontAwesomeIcon className="star" icon={faStar} />
        </div>
      </div>
      <h1 className="gameName">{name}</h1>
    </div>
  );
}
