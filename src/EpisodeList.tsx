import React from 'react';
import { IEpisode } from "./interfaces";

const EpisodeList = (props: any): Array<JSX.Element> => {
  const { episodes, toggleFavAction, episodeInFav } = props;

  return episodes.map((episode: IEpisode) => {
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
    }
  )
};

export default EpisodeList;