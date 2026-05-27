import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  const gamePath = (path) => `${import.meta.env.BASE_URL}${path}`

  return (
    <div className="page">
      <header className="top-nav">
        <button
          className={page === 'home' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('home')}
        >
          Home
        </button>

        <button
          className={page === 'works' ? 'nav-link active' : 'nav-link'}
          onClick={() => setPage('works')}
        >
          Works
        </button>
      </header>

      <main className="content">
        {page === 'home' && (
          <section className="home-section">
            <h1>Hey, I'm Martin ~ </h1>

            <p className="intro-text">
              Welcome in. I build small, fun, and occasionally useful things here.
            </p>

            <div className="current-block">
              <h2>What I am currently working on:</h2>

              <ul className="current-list">
                <li>
                  <button
                    className="text-link"
                    onClick={() => setPage('works')}
                  >
                    <strong>Xio:</strong>
                  </button>
                  <span>
                    {' '}A playful remake of a hand-clapping game that once took over my middle school, carrying some of my fondest memories from those days.
                  </span>
                </li>

                <li>
                  <button
                    className="text-link"
                    onClick={() => setPage('works')}
                  >
                    <strong>Dot Dual:</strong>
                  </button>
                  <span>
                    {' '}Inspired by a pen-and-paper game I used to play with grade school classmates.
                  </span>
                </li>
              </ul>
            </div>
          </section>
        )}

        {page === 'works' && (
          <section className="works-section">
            <h2>Works</h2>

            <article className="work-item">
              <h4>Xio</h4>

              <p>
                <strong>How to Play:</strong> A fast-paced, turn-based battle game. Manage, predict, and strike. Only 5 seconds to decide and act per turn. 
              </p>

              <a
                className="play-link"
                href={gamePath('games/xio/index.html')}
                target="_blank"
                rel="noreferrer"
              >
                Play!
              </a>
            </article>

            <article className="work-item">
              <h4>Dot Dual</h4>

              <p>
                <strong>How to Play:</strong> Drag and release to launch your dot. Push your opponent into the water to win! Tip: You only sink if you stop completely inside the water.
              </p>

              <a
                className="play-link"
                href={gamePath('games/dot-dual/index.html')}
                target="_blank"
                rel="noreferrer"
              >
                Play!
              </a>
            </article>
          </section>
        )}
      </main>
    </div>
  )
}

export default App