import React from 'react';
import './App.css';
import {Store} from './Store';
import { IAction, IEpisode } from './interfaces';

const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

const App = (): JSX.Element => {
  const {state, dispatch} = React.useContext(Store);

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

  return (
    <React.Fragment>
      {console.log(state)}
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
            Favourites: {state.favourites.length}
        </div>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
           return (
             <section key={episode.id} className="episode-box">
               {episode.image && <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />}
               <div>{episode.name}</div>
              <section>
                <div>Season: {episode.season} Number: {episode.number}</div>
                <button type="button" className="btn" onClick={()=> toggleFavAction(episode)}>
                 {/*alternative: state.favourites.find(fav => fav.id === episode.id) ? unfav : fav*/}
                  {episodeInFav(episode) ? 'unafav' : 'fav'}
                </button>
              </section>
             </section>
           )
        })}
      </section>
    </React.Fragment>
  )
};

export default App;
