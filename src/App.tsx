import React from 'react';
import logo from './logo.jpg';
import './App.css';

const { Provider, Consumer } = React.createContext("cau");

export function Parent(props: any) {
  const text = "random text";

  return <Provider value={text}>{props.children}</Provider>;
}

export function Child() {
  return <Consumer>{text => <div>{text}</div>}</Consumer>
}

