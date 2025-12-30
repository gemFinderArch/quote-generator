import { useState, useEffect, useRef } from 'react';
import { fetchAuthorImage } from '../utils/wikipediaApi';

export function useAuthorImage(authorName) {
  const [state, setState] = useState({
    imageUrl: null,
    isLoading: !!authorName,
    hasError: !authorName,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    if (!authorName) {
      return;
    }

    let cancelled = false;

    async function loadImage() {
      try {
        const url = await fetchAuthorImage(authorName);

        if (cancelled || !isMounted.current) return;

        if (url) {
          const img = new Image();
          img.onload = () => {
            if (!cancelled && isMounted.current) {
              setState({ imageUrl: url, isLoading: false, hasError: false });
            }
          };
          img.onerror = () => {
            if (!cancelled && isMounted.current) {
              setState({ imageUrl: null, isLoading: false, hasError: true });
            }
          };
          img.src = url;
        } else {
          setState({ imageUrl: null, isLoading: false, hasError: true });
        }
      } catch {
        if (!cancelled && isMounted.current) {
          setState({ imageUrl: null, isLoading: false, hasError: true });
        }
      }
    }

    setState({ imageUrl: null, isLoading: true, hasError: false });
    loadImage();

    return () => {
      cancelled = true;
      isMounted.current = false;
    };
  }, [authorName]);

  return state;
}
