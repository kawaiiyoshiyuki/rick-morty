import React from 'react';
import './App.css';
import {Store} from './Store';

type ContextProps = {
  authenticated: boolean,
  lang: string,
  theme: string,
}

const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

export const AppContext = React.createContext<Partial<ContextProps>>({});

const App = (): JSX.Element => {
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  });

  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  };

  return (
    <React.Fragment>
      {console.log(state)}
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!</p>
    </React.Fragment>
  )
};

export default App;
