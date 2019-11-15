import { IAction, IEpisode, IState } from "./interfaces";
import { Dispatch } from "react";

// get episodes data
export const fetchDataAction = async (dispatch: Dispatch<IAction>) => {
  const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes,
  })
};

// add to favourites or remove if it is fav already
export const toggleFavAction = (state: IState, episode: IEpisode | any, dispatch: any): IAction => {
  const episodeInFav = state.favourites.includes(episode);
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode,
  };
  if (episodeInFav) {
    // filter items and remove the one with the episode id
    const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode,
    }
  }
  return dispatch(dispatchObj);
};