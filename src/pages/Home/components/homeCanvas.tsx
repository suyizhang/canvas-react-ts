import React, { useEffect, useState, useCallback, useRef } from 'react';

interface Props {
  text: string
}

function HomeCanvas(props: Props) {
  const { text = '素衣拂微澜' } = props;
  const canvasRef: React.RefObject<any> = useRef();
  const currentRef = useRef<any>({});

  const [bodySize, setBodySize] = useState<{ screenWidth: number, screenHeight: number }>({
    screenWidth: document.body.clientWidth,
    screenHeight: document.body.clientHeight / 2
  });

  const draw = useCallback(() => {
    const { screenWidth, screenHeight } = bodySize;
    currentRef.current.context.clearRect(0, 0, screenWidth, screenHeight);
    currentRef.current.drawCircle();
    window.requestAnimationFrame(draw);
  }, [bodySize])

  const init = useCallback(() => {
    const { screenWidth, screenHeight } = bodySize;
    const canvas = canvasRef.current;
    currentRef.current = new Utils.canvas.floatWord(canvas, screenWidth / 2, screenHeight / 2, text);
    currentRef.current.reset();
    currentRef.current.getValue();
    draw();
  }, [bodySize, canvasRef, draw, text]);

  const changeSize = () => {
    setBodySize({
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight / 2
    });
  };

  useEffect(() => {
    init();
    window.addEventListener('resize', changeSize);
    return () => {
      window.removeEventListener('resize', changeSize);
    }
  }, [init, text]);

  useEffect(() => {
    init();
  }, [bodySize, init])

  return (
    <canvas ref={canvasRef} width={bodySize.screenWidth} height={bodySize.screenHeight}></canvas>
  )
}

export default HomeCanvas;