import React from 'react';
import { IAction, IState} from './interfaces';

const defaultFAV = {
  airdate: "2013-12-09",
  airstamp: "2013-12-10T03:30:00+00:00",
  airtime: "22:30",
  id: 14309,
  image: { medium: "http://static.tvmaze.com/uploads/images/medium_landscape/15/37913.jpg", original: ""},
  name: "Lawnmower Dog",
  "url": "http://www.tvmaze.com/episodes/14309/rick-and-morty-1x02-lawnmower-dog",
};

const initialState: IState= {
  episodes: [],
  favourites: [defaultFAV,],
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favourites: [ ...state.favourites, action.payload] };
    case 'REMOVE_FAV':
      //replace favourites with the new list of favs
      return { ...state, favourites: action.payload}
    default:
      return state;
  }
};

export const StoreProvider = (children: JSX.ElementChildrenAttribute) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>
    {children.children}
  </Store.Provider>
};
