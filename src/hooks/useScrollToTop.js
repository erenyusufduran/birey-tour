import { useEffect } from 'react';

export const useScrollToTop = (pathname, name = '') => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Birey Tour ${name && `| ${name}`}`;
  }, [pathname, name]);
};
