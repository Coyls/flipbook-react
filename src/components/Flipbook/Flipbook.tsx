import React, { useRef } from "react";
import { FlipbookProps } from "./Flipbook.type";

export const Flipbook = (props: FlipbookProps) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div id="flipbook-container" ref={canvasContainerRef}>
      <canvas id="flipbook" ref={canvasRef} /* className={cls(className)} */></canvas>
    </div>
  );
}

export default Flipbook
