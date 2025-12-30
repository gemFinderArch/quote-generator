import { useState, useCallback } from 'react'
import { quotes } from './quotes'
import './App.css'

function App() {
  const [currentQuote, setCurrentQuote] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [quoteHistory, setQuoteHistory] = useState([])

  const getRandomQuote = useCallback(() => {
    // Filter out recently shown quotes to avoid repetition
    const availableQuotes = quotes.filter(
      (q) => !quoteHistory.includes(q.text)
    )

    // Reset history if we've shown all quotes
    const quotesToChooseFrom = availableQuotes.length > 0 ? availableQuotes : quotes

    const randomIndex = Math.floor(Math.random() * quotesToChooseFrom.length)
    return quotesToChooseFrom[randomIndex]
  }, [quoteHistory])

  const handleNewQuote = () => {
    setIsAnimating(true)

    // Small delay for exit animation
    setTimeout(() => {
      const newQuote = getRandomQuote()
      setCurrentQuote(newQuote)

      // Keep track of last 20 quotes to avoid repetition
      setQuoteHistory((prev) => {
        const updated = [...prev, newQuote.text]
        return updated.slice(-20)
      })

      // Reset animation state after enter animation
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, currentQuote ? 300 : 0)
  }

  return (
    <div className="app">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        <header className="header">
          <h1 className="title">Daily Wisdom</h1>
          <p className="subtitle">Timeless quotes from great minds</p>
        </header>

        <div className="quote-container">
          {currentQuote ? (
            <div className={`quote-card ${isAnimating ? 'exit' : 'enter'}`}>
              <div className="quote-icon">"</div>
              <blockquote className="quote-text">
                {currentQuote.text}
              </blockquote>
              <cite className="quote-author">— {currentQuote.author}</cite>
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">✨</div>
              <p>Press the button to discover wisdom</p>
            </div>
          )}
        </div>

        <button
          className={`inspire-button ${isAnimating ? 'pulse' : ''}`}
          onClick={handleNewQuote}
          disabled={isAnimating}
        >
          <span className="button-text">
            {currentQuote ? 'New Quote' : 'Inspire Me'}
          </span>
          <span className="button-icon">→</span>
        </button>

        <footer className="footer">
          <p>{quotes.length} quotes from history's greatest minds</p>
        </footer>
      </div>
    </div>
  )
}

export default App
