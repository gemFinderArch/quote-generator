import { useAuthorImage } from '../../hooks/useAuthorImage';
import { getInitials } from '../../utils/wikipediaApi';
import './AuthorImage.css';

export default function AuthorImage({ authorName }) {
  const { imageUrl, isLoading, hasError } = useAuthorImage(authorName);

  if (isLoading) {
    return (
      <div className="author-image author-image--loading" aria-label="Loading author image">
        <div className="shimmer" />
      </div>
    );
  }

  if (hasError || !imageUrl) {
    return (
      <div className="author-image author-image--fallback" aria-label={authorName}>
        <span className="initials">{getInitials(authorName)}</span>
      </div>
    );
  }

  return (
    <div className="author-image author-image--loaded">
      <img
        src={imageUrl}
        alt={authorName}
        className="author-img"
      />
    </div>
  );
}
