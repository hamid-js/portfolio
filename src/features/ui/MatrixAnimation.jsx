import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const screen = window.screen;
    const canvasWidth = (canvas.width = screen.width);
    const canvasHeight = (canvas.height = screen.height);
    const columns = Array(256).join(1).split('');

    const draw = () => {
      context.fillStyle = 'rgba(0,0,0,.05)';
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.fillStyle = '#0F0';

      columns.map((yPos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const xPos = index * 10;
        context.fillText(text, xPos, yPos);
        columns[index] = yPos > 758 + Math.random() * 1e4 ? 0 : yPos + 10;
        return null;
      });
    };

    const animationId = setInterval(draw, 60);

    return () => clearInterval(animationId);
  }, []); // Empty dependency array ensures useEffect runs only once

  const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: '-2',
    opacity: "0.4",
    width: "100%"

  };

  return <canvas ref={canvasRef} style={canvasStyle} />;
};

export default MatrixBackground;

