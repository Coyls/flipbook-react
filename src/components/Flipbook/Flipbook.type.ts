export interface FlipbookProps {
  value: number;
  frameFolderPath: string;
  canvasWidth?: number;
  canvasHeight?: number;
  className?: string;
  startingFrame?: number;
  endingFrame?: number;
}
