import { useEffect, useRef } from 'react';

const Parallax = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const { current } = ref;
      const yOffset = window.pageYOffset;
      const transform = `translateY(${yOffset * 0.4}px)`;
      current.style.transform = transform;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full">
      {children}
    </div>
  );
};

export default Parallax;