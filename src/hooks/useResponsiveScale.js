import { useState, useEffect } from 'react';

const getScale = (width) => {
  if (width < 768) { // Tailwind's 'md' breakpoint
    return 1.5; // Smaller scale for mobile
  } else if (width < 1024) { // Tailwind's 'lg' breakpoint
    return 1.8; // Medium scale for tablets
  }
  return 2; // Default scale for larger screens
};

export default function useResponsiveScale() {
  const [scale, setScale] = useState(getScale(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setScale(getScale(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return scale;
}
