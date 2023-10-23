import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Game } from "../../models/models";
import { faApple, faLinux, faWindows, faXbox } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CardGame({ name, rating, url, platform }: Game) {
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