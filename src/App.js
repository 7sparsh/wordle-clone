import React, {useState, createContext} from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard';
import { defaultGrid } from './DefaultGrid';

export const userContext = createContext();

function App() {
  const [grid, setGrid] = useState(defaultGrid);
  return (
    <div className="App">
      <userContext.Provider value={{grid, setGrid}}>
        <Header/>
        <Grid/>
        <Keyboard/>
      </userContext.Provider>
    </div>
  );
}

export default App;
