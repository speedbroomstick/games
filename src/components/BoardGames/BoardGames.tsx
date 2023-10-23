import { useEffect, useReducer, useState } from "react";
import "./boardGames.scss";

import gameDateJson from "../../data/games.json";
import { BoardGamesProps, Game } from "../../models/models";
import CardGame from "../CardGame/CardGame";
import FilterGroup from "../FilterGroup/FilterGroup";
import { initialState, reducer } from "../../store/filterReducer";

export default function BoardGames({ inputText }: BoardGamesProps) {
  const [gameDate, setGameDate] = useState<Game[]>(gameDateJson);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const filteredGames = gameDateJson.filter((game) => {
      return game.name.toLowerCase().includes(inputText.toLowerCase());
    });
    inputText ? setGameDate(filteredGames) : setGameDate(gameDateJson);
  }, [inputText]);

  useEffect(() => {
    const filteredGames = gameDateJson.filter((game) => {
      return game.platform[state.filterAttribute as keyof Game['platform']] === true;
    });
    state.filterAttribute ? setGameDate(filteredGames) : setGameDate(gameDateJson);
  }, [state.filterAttribute]);

  useEffect(() => {
    if (state.filterOption === 'By Rating') {
      const sortedGames = [...gameDateJson];
      sortedGames.sort((a, b) => b.rating - a.rating);
      setGameDate(sortedGames);
    } else if (state.filterOption === 'By Date') {
      const sortedGames = [...gameDateJson];
      sortedGames.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setGameDate(sortedGames);
    }
  }, [state.filterOption]);

  return (
    <div className="board">
      <h1 className="headline">Games</h1>
      <div className="filters">
        <FilterGroup onChangeFilter={(value) => dispatch({ type: 'ChangeFilterAttribute', payload: value })} options={['xbox', 'windows', 'apple', 'linux']} />
        <FilterGroup onChangeFilter={(value) => dispatch({ type: 'ChangeFilterOption', payload: value })} options={['By Rating', 'By Date']} />
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
