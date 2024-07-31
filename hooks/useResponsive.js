import { useState, useEffect } from 'react';
import useMediaQuery from 'react-responsive';

const useResponsive = (query) => {
  const [isMatch, setIsMatch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      setIsMatch(mediaQueryList.matches);

      const handleChange = (event) => {
        setIsMatch(event.matches);
      };

      mediaQueryList.addListener(handleChange);
      return () => {
        mediaQueryList.removeListener(handleChange);
      };
    }
  }, [query]);

  return isMatch;
};

export default useResponsive;
