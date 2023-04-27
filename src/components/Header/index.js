import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav className="header-bg-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="score-timer-container">
        <li className="container">
          <p className="score-text">
            score: <span className="score-time">{score}</span>
          </p>
        </li>
        <li className="container">
          <img
            className="timer-image"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score-time">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
