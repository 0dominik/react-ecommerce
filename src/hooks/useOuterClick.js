import { useRef, useEffect } from 'react';

export const useOuterClick = (callback) => {
  const innerRef = useRef();
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, []);

  const handleClick = (e) => {
    if (innerRef.current && callbackRef.current && !innerRef.current.contains(e.target)) {
      callbackRef.current(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return innerRef;
};
