import type { FC } from '@lynx-js/react'
import { root } from "@lynx-js/react";

import { furnituresPictures } from './FurniturePictures.jsx';
import { Gallery } from "./Gallery.jsx";

export const PictureList: FC = () => {
  return <Gallery pictureData={furnituresPictures} />
}

PictureList.displayName = 'PictureList'
