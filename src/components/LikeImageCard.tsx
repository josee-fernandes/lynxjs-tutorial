import type { FC } from '@lynx-js/react'

import type { Picture } from './FurniturePictures.jsx';
import { LikeButton } from './LikeButton.jsx';

interface LikeImageCard { picture: Picture }

export const LikeImageCard: FC<LikeImageCard> = ({ picture }) => {

  return (
    <view className="picture-wrapper">
      <image
        style={{ width: "100%", aspectRatio: picture.width / picture.height }}
        src={picture.src}
      />
      <LikeButton />
    </view>
  )
}

LikeImageCard.displayName = 'LikeImageCard'
