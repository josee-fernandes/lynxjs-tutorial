import { root } from '@lynx-js/react'
import type { FC } from '@lynx-js/react'

import { furnituresPictures } from './FurniturePictures.jsx'
import { ImageCard } from './ImageCard.jsx'

export const CardWrapper: FC = () => {
  const firstPicture = furnituresPictures[0]

  return (
    <view className="gallery-wrapper single-card">
      <ImageCard picture={firstPicture} />
    </view>
  )
}

CardWrapper.displayName = 'CardWrapper'
