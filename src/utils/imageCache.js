const CACHE_KEY = 'quote-generator-author-images';
const CACHE_EXPIRY_DAYS = 7;

function getCache() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return {};

    const { data, timestamp } = JSON.parse(cached);
    const expiryTime = CACHE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    if (Date.now() - timestamp > expiryTime) {
      localStorage.removeItem(CACHE_KEY);
      return {};
    }

    return data || {};
  } catch {
    return {};
  }
}

function setCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  } catch {
    // localStorage might be full or unavailable
  }
}

export function getCachedImage(authorName) {
  const cache = getCache();
  return cache[authorName] || null;
}

export function setCachedImage(authorName, imageUrl) {
  const cache = getCache();
  cache[authorName] = imageUrl;
  setCache(cache);
}

export function hasCachedImage(authorName) {
  const cache = getCache();
  return authorName in cache;
}
