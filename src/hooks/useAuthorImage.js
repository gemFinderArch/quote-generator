import { useState, useEffect, useRef, useMemo } from 'react';
import { fetchAuthorImage } from '../utils/wikipediaApi';

export function useAuthorImage(authorName) {
  // Compute initial state based on authorName
  const initialState = useMemo(() => ({
    imageUrl: null,
    isLoading: !!authorName,
    hasError: !authorName,
    forAuthor: authorName,
  }), [authorName]);

  const [state, setState] = useState(initialState);
  const isMounted = useRef(true);

  // Reset state when authorName changes
  const currentState = state.forAuthor === authorName ? state : initialState;

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
              setState({
                imageUrl: url,
                isLoading: false,
                hasError: false,
                forAuthor: authorName,
              });
            }
          };
          img.onerror = () => {
            if (!cancelled && isMounted.current) {
              setState({
                imageUrl: null,
                isLoading: false,
                hasError: true,
                forAuthor: authorName,
              });
            }
          };
          img.src = url;
        } else {
          setState({
            imageUrl: null,
            isLoading: false,
            hasError: true,
            forAuthor: authorName,
          });
        }
      } catch {
        if (!cancelled && isMounted.current) {
          setState({
            imageUrl: null,
            isLoading: false,
            hasError: true,
            forAuthor: authorName,
          });
        }
      }
    }

    loadImage();

    return () => {
      cancelled = true;
      isMounted.current = false;
    };
  }, [authorName]);

  return {
    imageUrl: currentState.imageUrl,
    isLoading: currentState.isLoading,
    hasError: currentState.hasError,
  };
}
