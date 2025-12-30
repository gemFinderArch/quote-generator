import './Button.css';

export default function Button({ onClick, disabled, isLoading, children }) {
  return (
    <button
      className={`inspire-button ${isLoading ? 'is-loading' : ''}`}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      <span className="button-content">{children}</span>
      <span className="button-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </button>
  );
}
