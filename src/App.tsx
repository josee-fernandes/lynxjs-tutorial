import type { FC } from '@lynx-js/react'

import './index.css'
import { Gallery } from './components/Gallery.jsx'
import { furnituresPictures } from './components/FurniturePictures.jsx'

export const App: FC = () => {
  return (
    <view
    >
     <Gallery pictureData={furnituresPictures}/>
    </view>
  )
}

App.displayName = 'App'
