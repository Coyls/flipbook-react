/**
 * Return the path of a frame
 *
 * @param frameFilePath Path to frame without index
 * @example "/assets/frames/cars_"
 *
 * @param index Index frame
 *
 *
 * @param frameExtension Extension file
 * @example "png, jpg, svg, ..."
 *
 */
export const getFramePath = (
  frameFilePath: string,
  index: number,
  frameExtension: string
): string => {
  return `${frameFilePath}${index.toString()}.${frameExtension}`;
};

export const preloadFrames = (
  frameStarting: number,
  framesTotal: number,
  frameFilePath: string,
  frameExtension: string,
  canvasWidth: number,
  canvasHeight: number
): HTMLImageElement[] => {
  const imageLoads: HTMLImageElement[] = [];
  for (let i = frameStarting; i < framesTotal + frameStarting; i++) {
    const img = new Image(canvasWidth, canvasHeight);
    img.src = getFramePath(frameFilePath, i, frameExtension);
    imageLoads.push(img);
  }

  return imageLoads;
};

// export const  duplicateFrame = () => {}
