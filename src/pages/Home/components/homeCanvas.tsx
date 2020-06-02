import React, { createRef, useEffect, useState, useCallback } from 'react';

interface Props {
  text: string
}

function HomeCanvas(props: Props ) {
  const { text = '素衣拂微澜' } = props;
  const canvasRef: React.RefObject<any> = createRef();
  let canvasText: any = null;

  const [bodySize, setBodySize] = useState<{ screenWidth: number, screenHeight: number }>({
    screenWidth: document.body.clientWidth,
    screenHeight:  document.body.clientHeight / 2
  });


  const init = () => {
    const { screenWidth, screenHeight } = bodySize;
    const canvas = canvasRef.current;
    canvasText = new Utils.TextDraw(canvas, screenWidth / 2, screenHeight / 2, text);
    console.log('canvasText');
    canvasText.reset();
    canvasText.getValue();
    // canvasText.getValue();
    draw();
  };

  // const changeSize = () => {
  //   setBodySize({
  //     screenWidth: document.body.clientWidth,
  //     screenHeight:  document.body.clientHeight / 2
  //   });
  // };



  useEffect(() => {
    init();
    // window.addEventListener('resize', changeSize);
    // return () => {
    //   window.removeEventListener('resize', changeSize);
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  // useEffect(() => {
  //   init();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [bodySize])

  const draw = () => {
    const { screenWidth, screenHeight } = bodySize;
    canvasText.context.clearRect(0, 0, screenWidth, screenHeight);
    canvasText.drawCircle();
    window.requestAnimationFrame(draw);
  }

  return (
    <canvas ref={canvasRef} width={bodySize.screenWidth} height={bodySize.screenHeight}></canvas>
  )
}

export default HomeCanvas;