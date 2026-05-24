function Cell({ value, onClick, isWinning, disabled, ariaLabel }) {
  const markClass = value === 'X' ? 'cell--x' : value === 'O' ? 'cell--o' : ''
  const winningClass = isWinning ? 'cell--win' : ''

  return (
    <button
      type="button"
      className={`cell ${markClass} ${winningClass}`.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {value ? <span className="cell__mark">{value}</span> : null}
    </button>
  )
}

export default Cell
