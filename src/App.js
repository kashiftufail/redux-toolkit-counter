import React from 'react';
import ReactDOM  from 'react-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Coin } from './features/coin/Coin';
import './App.css';


const App = () => {
  return (
    <div className="App">      
    <h1>Redux toolkit counter</h1>
        <Coin />      
        <Counter />      
    </div>
  )
}

export default App