import React from 'react';
import './App.css';
import './style.css';
import TicTacToeGameComponent from './TicTacToeGameComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <TicTacToeGameComponent />
    </div>
  );
};


export default App;
