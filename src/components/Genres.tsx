import Icon from "./Icon"
import './genres.scss'
import dataCategory from "../data/categoryGenres.json"

interface Category{
    id: number;
    name: string;
    url: string;
}

export default function Genres(){
    const categorys:Category[] = dataCategory;
    return(
        <div className="genres">
            <h1 className="headline">Genres</h1>
            {categorys.map(category=>(
                <Icon url={category.url}>{category.name}</Icon>
            ))}
        </div>
    )
}