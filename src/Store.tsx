import React from 'react';

interface IState {
  episodes: Array<any>,
  favourites: Array<any>,
}

const initialState: IState= {
  episodes: [],
  favourites: [],
};

interface IAction {
  type: string,
  payload: any;
}

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{state, dispatch}}>
    {props.children}
  </Store.Provider>
};
