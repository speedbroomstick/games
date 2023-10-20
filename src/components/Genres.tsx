import Icon from "./Icon";
import "./genres.scss";
import dataCategory from "../data/categoryGenres.json";

interface Category {
  id: number;
  name: string;
  url: string;
}

export default function Genres() {
  const categorys: Category[] = dataCategory;
  return (
    <div className="genres">
      <h1 className="headline">Genres</h1>
      {categorys.map((category) => (
        <Icon
          key={category.id}
          url={category.url}
          size={{ width: 3, height: 3 }}
          margin={1}
          animation={true}
        >
          {category.name}
        </Icon>
      ))}
    </div>
  );
}
