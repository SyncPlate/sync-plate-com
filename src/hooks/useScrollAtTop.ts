import { useState, useEffect } from 'react';

export default function useScrollAtTop(offset = 0) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return isAtTop;
}
