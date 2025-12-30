import { normalizeAuthorName, shouldSkipAuthor } from './authorNameMap';
import { getCachedImage, setCachedImage, hasCachedImage } from './imageCache';

const WIKIPEDIA_API_BASE = 'https://en.wikipedia.org/api/rest_v1/page/summary';

export async function fetchAuthorImage(authorName) {
  // Check if we should skip this author
  if (shouldSkipAuthor(authorName)) {
    return null;
  }

  // Check cache first
  if (hasCachedImage(authorName)) {
    return getCachedImage(authorName);
  }

  try {
    const normalizedName = normalizeAuthorName(authorName);
    const url = `${WIKIPEDIA_API_BASE}/${encodeURIComponent(normalizedName)}`;

    const response = await fetch(url, {
      headers: {
        'Api-User-Agent': 'QuoteGenerator/1.0 (https://github.com/quote-generator)',
      },
    });

    if (!response.ok) {
      setCachedImage(authorName, null);
      return null;
    }

    const data = await response.json();
    const imageUrl = data.thumbnail?.source || null;

    // Cache the result (even if null, to avoid repeated failed requests)
    setCachedImage(authorName, imageUrl);

    return imageUrl;
  } catch (error) {
    console.warn(`Failed to fetch image for ${authorName}:`, error);
    setCachedImage(authorName, null);
    return null;
  }
}

export function getInitials(name) {
  if (!name) return '?';

  // Handle proverbs and special cases
  if (shouldSkipAuthor(name)) {
    return name.charAt(0).toUpperCase();
  }

  const words = name.split(' ').filter(word =>
    word.length > 0 &&
    !word.match(/^(Jr\.|Sr\.|III|IV|II)$/i)
  );

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  // Get first and last name initials
  const first = words[0].charAt(0);
  const last = words[words.length - 1].charAt(0);

  return (first + last).toUpperCase();
}
