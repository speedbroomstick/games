type State = {
    filterAttribute: string;
    filterOption: string;
  };
  
  type Action =
    | { type: 'ChangeFilterAttribute'; payload: string }
    | { type: 'ChangeFilterOption'; payload: string };
  
 export const initialState: State = {
    filterAttribute: '',
    filterOption: '',
  };
  
 export const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'ChangeFilterAttribute':
        return { ...state, filterAttribute: action.payload };
      case 'ChangeFilterOption':
        return { ...state, filterOption: action.payload };
      default:
        return state;
    }
  };