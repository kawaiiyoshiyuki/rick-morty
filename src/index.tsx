import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./HomePage";
import FavPage from "./FavPage";
import * as serviceWorker from './serviceWorker';

const RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent;
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path={process.env.PUBLIC_URL + '/'} >
        <RouterPage pageComponent={<HomePage />} path={process.env.PUBLIC_URL + '/'} />
        <RouterPage pageComponent={<FavPage />} path={process.env.PUBLIC_URL + '/faves'} />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
