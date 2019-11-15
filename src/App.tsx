import React from 'react';
import './App.css';
import {Link} from '@reach/router';
import { Store } from "./Store";

const App = (props: any): JSX.Element => {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        <div>
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/faves'>Favourites: {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
};

export default App;
