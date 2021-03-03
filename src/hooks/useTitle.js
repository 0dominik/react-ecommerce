import { useEffect } from 'react';

export const useTitle = (title, dependencyArray = []) => {
  useEffect(() => {
    document.title = `Olios - ${title}`;

    return () => {
      document.title = 'Olios';
    };
  }, dependencyArray);
};
