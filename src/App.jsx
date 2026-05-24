import { useState } from 'react'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import ResetButton from './components/ResetButton'
import { checkWinner } from './utils/gameLogic'
import './App.css'

const initialBoard = Array(9).fill(null)

function App() {
  const [board, setBoard] = useState(initialBoard)
  const [isXTurn, setIsXTurn] = useState(true)
  const [winnerInfo, setWinnerInfo] = useState(null)

  const currentPlayer = isXTurn ? 'X' : 'O'
  const isDraw = !winnerInfo && board.every(Boolean)
  const isGameOver = Boolean(winnerInfo || isDraw)

  function handleCellClick(index) {
    if (board[index] || winnerInfo) return

    const next = board.slice()
    next[index] = currentPlayer
    setBoard(next)

    const result = checkWinner(next)
    if (result) {
      setWinnerInfo(result)
    } else {
      setIsXTurn((prev) => !prev)
    }
  }

  function resetGame() {
    setBoard(initialBoard)
    setIsXTurn(true)
    setWinnerInfo(null)
  }

  let statusMessage = `Player ${currentPlayer}'s turn`
  let statusVariant = 'turn'
  let statusTone = currentPlayer.toLowerCase()
  if (winnerInfo) {
    statusMessage = `Player ${winnerInfo.winner} wins!`
    statusVariant = 'win'
    statusTone = winnerInfo.winner.toLowerCase()
  } else if (isDraw) {
    statusMessage = "It's a draw!"
    statusVariant = 'draw'
    statusTone = null
  }

  return (
    <main className="app">
      <header className="app__header">
        <p className="app__eyebrow">Tic Tac Toe</p>
        <h1 className="app__title">Play bold, win clean.</h1>
        <p className="app__subtitle">
          A crisp, two-player grid duel with instant feedback.
        </p>
      </header>

      <section className="game">
        <GameStatus
          message={statusMessage}
          variant={statusVariant}
          tone={statusTone}
        />
        <Board
          board={board}
          onCellClick={handleCellClick}
          winnerLine={winnerInfo?.line || []}
          disabled={isGameOver}
        />
        <ResetButton onClick={resetGame} />
      </section>
    </main>
  )
}

export default App
