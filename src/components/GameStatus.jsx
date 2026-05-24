function GameStatus({ message, variant, tone }) {
  const toneClass = tone ? `status--${tone}` : ''

  return (
    <div
      className={`status status--${variant} ${toneClass}`.trim()}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}

export default GameStatus
