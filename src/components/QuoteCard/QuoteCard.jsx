import AuthorImage from '../AuthorImage/AuthorImage';
import './QuoteCard.css';

export default function QuoteCard({ quote, animationState }) {
  if (!quote) {
    return (
      <div className="quote-card quote-card--empty">
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </div>
          <p className="empty-text">Click below to get inspired</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`quote-card ${animationState === 'exit' ? 'quote-card--exit' : 'quote-card--enter'}`}>
      <div className="quote-content">
        <AuthorImage authorName={quote.author} />

        <blockquote className="quote-block">
          <p className="quote-text">{quote.text}</p>
          <footer className="quote-footer">
            <cite className="quote-author">{quote.author}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}
