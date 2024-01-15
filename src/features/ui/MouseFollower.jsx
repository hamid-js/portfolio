import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsPointer(true);
    };

    const handleMouseLeave = () => {
      setIsPointer(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const updatePrevPosition = setTimeout(() => {
      setPrevPosition({ ...position });
    }, 50);

    return () => {
      clearTimeout(updatePrevPosition);
    };
  }, [position]);

  const getTransitionDuration = () => {
    return isPointer ? 0.3 : 1;
  };

  const getSize = () => {
    return isPointer ? 70 : 20;
  };

  return (
    <div className="mouse-follower-container">
      <div
        className="mouse"
        style={{
          left: prevPosition.x,
          top: prevPosition.y,
          width: `${getSize()}px`,
          height: `${getSize()}px`,
          transition: `transform ${getTransitionDuration()}s`,
        }}
      />
      <div
        className={`mouse current ${isPointer ? 'pointer' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          width: `${getSize()}px`,
          height: `${getSize()}px`,
          transition: `transform ${getTransitionDuration()}s`,
        }}
      />
    </div>
  );
};

export default MouseFollower;
