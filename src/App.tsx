import React from 'react';
import './App.css';

// this context example is from https://fettblog.eu/typescript-react/context/
// see it life: https://stackblitz.com/edit/react-ts-d4toch?file=index.tsx

type ContextProps = {
  authenticated: boolean,
  lang: string,
  theme: string,
}

export const AppContext = React.createContext<Partial<ContextProps>>({});

const Header = () => {
  return <AppContext.Consumer>
    {
      ({authenticated}) => {
        if(authenticated) {
          return <h1>Logged in!</h1>
        }
        return <h1>You need to sign in</h1>
      }
    }
  </AppContext.Consumer>
};

const App = () => {
  return <AppContext.Provider value={{
    authenticated: true,
  }}>
    <Header/>
  </AppContext.Provider>
};

export default App;
