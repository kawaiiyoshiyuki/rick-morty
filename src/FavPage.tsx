import React from 'react';
import { Store } from "./Store";
import { toggleFavAction } from './Actions';
import { IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const FavPage = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return(
    <React.Suspense fallback={<div>loading ... </div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  )
};

export default FavPage;