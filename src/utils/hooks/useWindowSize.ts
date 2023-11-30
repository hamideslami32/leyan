import { useEffect, useState } from 'react';
import debounce from '../debounce';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const debouncedHandleSize = debounce(handleSize);

  if (typeof window !== 'undefined')
    window.addEventListener('resize', debouncedHandleSize);
  // Set size at the first client-side load
  useEffect(() => {
    debouncedHandleSize();
    // cleanup for performance
    return () => {
      window.removeEventListener('resize', debouncedHandleSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}
