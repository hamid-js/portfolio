import { useState } from 'react';

function MouseMover() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const para = (e) => {
    setPos({
        ...pos,
        x:e.clientX ,
        y:e.clientY
    })
  }
  return <div onMouseMove={para} className='main'>
    <div className='shape' style={{top:pos.y ,left: pos.x}} ></div>
  </div>;
}

export default MouseMover;
