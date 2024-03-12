'use client';

import { useEffect, useRef } from 'react';
import { IoArrowUpCircleOutline } from 'react-icons/io5';

export default function ToTop() {
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const backToTop = topRef.current;

    const handleScrollTop = () => {
      if (backToTop) {
        backToTop.style.transition = 'opacity 500ms';
        backToTop.style.display = 'none';

        const hideBackToTop = setTimeout(() => {
          backToTop.style.display = 'none';
        }, 500);

        if (document.documentElement.scrollTop > 700) {
          // fade in 500ms
          clearTimeout(hideBackToTop);
          backToTop.style.display = 'block';
          backToTop.style.opacity = '1';
        } else {
          // fade out 500ms
          backToTop.style.opacity = '0';
          hideBackToTop;
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
      className='fixed bottom-4 right-4 z-50 cursor-pointer bg-foreground-1 rounded-full drop-shadow-xl'
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
    >
      <IoArrowUpCircleOutline className='size-12 text-green-1 bg-foreground-1 hover:bg-hover-3 duration-300 rounded-full p-2' />
    </div>
  );
}
