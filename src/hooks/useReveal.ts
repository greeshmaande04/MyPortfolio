import { useEffect, useRef } from 'react';

export function useReveal(className = 'reveal') {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [className]);

  return ref;
}
