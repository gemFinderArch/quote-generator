import { useState, useEffect } from 'react';
import { fetchAuthorImage } from '../utils/wikipediaApi';

export function useAuthorImage(authorName) {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!authorName) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    let cancelled = false;

    async function loadImage() {
      setIsLoading(true);
      setHasError(false);

      try {
        const url = await fetchAuthorImage(authorName);

        if (cancelled) return;

        if (url) {
          // Preload the image to ensure smooth reveal
          const img = new Image();
          img.onload = () => {
            if (!cancelled) {
              setImageUrl(url);
              setIsLoading(false);
            }
          };
          img.onerror = () => {
            if (!cancelled) {
              setImageUrl(null);
              setHasError(true);
              setIsLoading(false);
            }
          };
          img.src = url;
        } else {
          setImageUrl(null);
          setHasError(true);
          setIsLoading(false);
        }
      } catch {
        if (!cancelled) {
          setImageUrl(null);
          setHasError(true);
          setIsLoading(false);
        }
      }
    }

    loadImage();

    return () => {
      cancelled = true;
    };
  }, [authorName]);

  return { imageUrl, isLoading, hasError };
}
