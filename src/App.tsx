import React from 'react';
import './App.css';
import {Link} from '@reach/router';
import { Store } from './Store';

const App = (props: any): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <nav>
          <Link className="link" to={process.env.PUBLIC_URL + '/'}>Home</Link>
          <Link className="link" to={process.env.PUBLIC_URL + '/faves'}>Favourites: {state.favourites.length}</Link>
        </nav>
      </header>
      {props.children}
    </React.Fragment>
  );
};

export default App;
