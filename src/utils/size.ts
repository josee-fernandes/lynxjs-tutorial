interface ICalculateEstimatedSizeFnParams {
  pictureWidth: number
  pictureHeight: number
}

type TCalculateEstimatedSizeFn = (params: ICalculateEstimatedSizeFnParams) => number

export const calculateEstimatedSize: TCalculateEstimatedSizeFn = ({ pictureWidth, pictureHeight }) => {
  // Fixed styles of the gallery
  const galleryPadding = 20;
  const galleryMainAxisGap = 10;
  const gallerySpanCount = 2;
  const galleryWidth = SystemInfo.pixelWidth / SystemInfo.pixelRatio;
  // Calculate the width of each ImageCard and return the relative height of the it.
  const itemWidth = (galleryWidth - galleryPadding * 2 - galleryMainAxisGap) / gallerySpanCount;
  return itemWidth / pictureWidth * pictureHeight;
}