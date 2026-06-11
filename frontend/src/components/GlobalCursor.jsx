import React, { useState, useEffect } from 'react';

const GlobalCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, select, .cursor-pointer, .link')) {
        setIsHoveringInteractive(true);
      } else {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* The inner dot that explosively expands into a difference-blend lens */}
      <div 
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-difference transition-all duration-300 ease-out hidden lg:flex items-center justify-center text-black font-bold tracking-widest text-[8px] uppercase"
        style={{
          width: isHoveringInteractive ? '80px' : '8px',
          height: isHoveringInteractive ? '80px' : '8px',
          backgroundColor: 'white',
          left: 0,
          top: 0,
          transform: `translate(${mousePos.x - (isHoveringInteractive ? 40 : 4)}px, ${mousePos.y - (isHoveringInteractive ? 40 : 4)}px)`,
        }}
      />
      
      {/* The outer ring that shrinks away on hover */}
      <div 
        className={`fixed pointer-events-none z-[9998] rounded-full border border-primary transition-transform duration-350 ease-out hidden lg:block ${isHoveringInteractive ? 'opacity-0 scale-100' : 'opacity-100 scale-100'}`}
        style={{
          width: '40px',
          height: '40px',
          left: 0,
          top: 0,
          transform: `translate(${mousePos.x - 20}px, ${mousePos.y - 20}px)`,
        }}
      />
    </>
  );
};

export default GlobalCursor;
