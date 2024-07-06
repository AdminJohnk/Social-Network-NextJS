'use client';

import { useEffect, useRef } from 'react';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

export default function ToTop() {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backToTop = topRef.current;
    // hide back to top button if at top of page
    const top = window.scrollY;
    if (top < 700 && backToTop) {
      backToTop.style.display = 'none';
    }

    const handleScrollTop = () => {
      if (backToTop) {
        backToTop.style.transition = 'all 500ms';
        backToTop.style.display = 'none';

        if (document.documentElement.scrollTop > 700) {
          // fade in 500ms
          backToTop.style.display = 'block';
          backToTop.style.opacity = '1';
        } else {
          // fade out 500ms
          backToTop.style.opacity = '0';
          backToTop.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScrollTop);

    return () => {
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  return (
    <div
      ref={topRef}
      className='fixed bottom-4 right-4 z-9 cursor-pointer bg-foreground-1 rounded-full drop-shadow-xl'
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
      <IoArrowUpCircleOutline className='size-12 text-green-1 bg-2 rounded-full p-2' />
    </div>
  );
}
