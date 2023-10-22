export interface Category {
    id: number;
    name: string;
    url: string;
  }

export interface Game {
    id?: number;
    name: string;
    rating: number;
    url: string;
    genre?: string;
    platform: {
      apple: boolean;
      linux: boolean;
      xbox: boolean;
      windows: boolean;
    };
    date?: string;
  }

  export interface BoardGamesProps {
    inputText: string;
  }

  export interface Iicon{
    url: string;
    children?: string;
    size?: {
        width: number;
        height: number;
    };
    margin?: number;
    animation?:boolean;
}

export interface IToolbar{
    theme?:boolean;
    onChange(value:string):void;
    changeTheme(value:boolean):void;
}
export interface IInput{
  onChange(value:string):void;
}
export interface ISwither{
  changeTheme(value:boolean):void;
}
export interface IFilterGroup{
    options:string[];
    onChangeFilter(filterAtribute:string):void;
}