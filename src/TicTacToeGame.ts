// TicTacToeGame.ts

export type Player = 'X' | 'O';
type Board = Player[];

class TicTacToeGame {
  private board: Board;
  private currentPlayer: Player;
  private winner: Player | null;

  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
  }

  public makeMove(index: number): void {
    if (!this.isCellEmpty(index) || this.winner !== null) {
      return;
    }

    this.board[index] = this.currentPlayer;
    this.checkWinner();
    this.switchPlayer();
  }

  public getCurrentPlayer(): Player {
    return this.currentPlayer;
  }

  public getBoard(): Board {
    return this.board;
  }

  public getWinner(): Player | null {
    return this.winner;
  }

  public isGameOver(): boolean {
    return this.isBoardFull() || this.winner !== null;
  }

  public isCellEmpty(index: number): boolean {
    return this.board[index] === null;
  }

  private switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  private isBoardFull(): boolean {
    return this.board.every((cell) => cell !== null);
  }

  private checkWinner(): void {
    const winPatterns: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.currentPlayer;
        return;
      }
    }
  }
}

export default TicTacToeGame;
