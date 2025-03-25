import type { FC } from '@lynx-js/react'

import type { Picture } from './FurniturePictures.jsx'

interface ImageCard {
  picture: Picture
}

export const ImageCard: FC<ImageCard> = ({ picture }) => {
  return (
    <view className="picture-wrapper">
      <image
        className="image"
        style={{ width: "100%", aspectRatio: picture.width / picture.height }}
        src={picture.src}
      />
    </view>
  )
}

ImageCard.displayName = 'ImageCard'
