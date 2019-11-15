import React from 'react';
import './App.css';
import {Store} from './Store';
import { IAction, IEpisode } from './interfaces';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

const App = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  });

  // get episodes data
  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    })
  };

  const episodeInFav = (episode: IEpisode) => {
    return state.favourites.includes(episode);
  };

  // add to favourites or remove if it is fav already
  const toggleFavAction = (episode: IEpisode): IAction => {
    // const episodeInFav = state.favourites.includes(episode);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode,
    };
    if (episodeInFav(episode)) {
      // filter items and remove the one with the episode id
      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favWithoutEpisode,
      }
    }
    return dispatch(dispatchObj);
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    episodeInFav,
  };

  return (
    <React.Fragment>
      {console.log(state)}
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
          Favourite(s): {state.favourites.length}
        </div>
      </header>
      <React.Suspense fallback={<div>loading ... </div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}

export default App;
