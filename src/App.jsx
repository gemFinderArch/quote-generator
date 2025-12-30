import { useState, useCallback } from 'react';
import { quotes } from './quotes';
import BackgroundEffects from './components/BackgroundEffects/BackgroundEffects';
import Header from './components/Header/Header';
import QuoteCard from './components/QuoteCard/QuoteCard';
import Button from './components/Button/Button';
import './App.css';

function App() {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationState, setAnimationState] = useState('enter');
  const [quoteHistory, setQuoteHistory] = useState([]);

  const getRandomQuote = useCallback(() => {
    const availableQuotes = quotes.filter(
      (q) => !quoteHistory.includes(q.text)
    );

    const quotesToChooseFrom = availableQuotes.length > 0 ? availableQuotes : quotes;
    const randomIndex = Math.floor(Math.random() * quotesToChooseFrom.length);
    return quotesToChooseFrom[randomIndex];
  }, [quoteHistory]);

  const handleNewQuote = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (currentQuote) {
      setAnimationState('exit');
      setTimeout(() => {
        const newQuote = getRandomQuote();
        setCurrentQuote(newQuote);
        setAnimationState('enter');

        setQuoteHistory((prev) => {
          const updated = [...prev, newQuote.text];
          return updated.slice(-20);
        });

        setTimeout(() => setIsAnimating(false), 100);
      }, 300);
    } else {
      const newQuote = getRandomQuote();
      setCurrentQuote(newQuote);
      setAnimationState('enter');

      setQuoteHistory([newQuote.text]);
      setTimeout(() => setIsAnimating(false), 100);
    }
  };

  return (
    <div className="app">
      <BackgroundEffects />

      <main className="main">
        <Header />

        <section className="quote-section">
          <QuoteCard
            quote={currentQuote}
            animationState={animationState}
          />
        </section>

        <div className="action-section">
          <Button
            onClick={handleNewQuote}
            disabled={isAnimating}
            isLoading={isAnimating}
          >
            {currentQuote ? 'New Quote' : 'Inspire Me'}
          </Button>
        </div>

        <footer className="footer">
          <p className="footer-text">
            {quotes.length} quotes from history's greatest minds
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
