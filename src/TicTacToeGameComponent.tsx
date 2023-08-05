// TicTacToeGameComponent.tsx

import React, { useState } from 'react';
import TicTacToeGame, { Player } from './TicTacToeGame'; // Import the TicTacToeGame class and Player type


const game = new TicTacToeGame();

const TicTacToeGameComponent: React.FC = () => {
  const [board, setBoard] = useState(game.getBoard());
  const [winner, setWinner] = useState<Player | null>(null);

  const handleCellClick = (index: number) => {
    if (game.isGameOver() || !game.isCellEmpty(index)) {
      return;
    }

    game.makeMove(index);
    setBoard([...game.getBoard()]);
    setWinner(game.getWinner());
  };

  const renderCell = (index: number) => {
    const cellValue = board[index];
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {cellValue}
      </div>
    );
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (game.isGameOver()) {
      return 'It\'s a draw!';
    } else {
      return `Current player: ${game.getCurrentPlayer()}`;
    }
  };

  return (
    <div className="game">
      <div className="board">
        {board.map((_, index) => renderCell(index))}
      </div>
      <div className="status">
        {renderStatus()}
      </div>
    </div>
  );
};

export default TicTacToeGameComponent;
