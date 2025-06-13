import { useState, useEffect } from 'react';

const getScale = (width) => {
  if (width < 768) return 1.5;       // Mobile
  if (width < 1024) return 1.8;      // Tablet
  return 2;                          // Desktop
};

export default function useResponsiveScale() {
  const isClient = typeof window !== 'undefined';
  const [scale, setScale] = useState(() => isClient ? getScale(window.innerWidth) : 2);

  useEffect(() => {
    if (!isClient) return;

    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScale(getScale(window.innerWidth));
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return scale;
}
