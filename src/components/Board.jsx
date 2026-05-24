import Cell from './Cell'

function Board({ board, onCellClick, winnerLine, disabled }) {
  return (
    <div className="board" role="grid" aria-label="Tic tac toe board">
      {board.map((value, index) => {
        const row = Math.floor(index / 3) + 1
        const col = (index % 3) + 1
        const ariaLabel = `Row ${row}, Column ${col} — ${value ?? 'empty'}`
        const isWinning = winnerLine.includes(index)
        const isDisabled = disabled || Boolean(value)

        return (
          <Cell
            key={index}
            value={value}
            onClick={() => onCellClick(index)}
            isWinning={isWinning}
            disabled={isDisabled}
            ariaLabel={ariaLabel}
          />
        )
      })}
    </div>
  )
}

export default Board
