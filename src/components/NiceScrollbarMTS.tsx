import type { FC } from '@lynx-js/react'

import type { MainThreadRef, RefObject } from '@lynx-js/react';
import type { MainThread } from '@lynx-js/types';

export const adjustScrollbarMTS = (scrollTop: number, scrollHeight: number, ref: RefObject<MainThread.Element>) => {
  "main thread"
  const listHeight = SystemInfo.pixelHeight / SystemInfo.pixelRatio
  const scrollbarHeight = listHeight * (listHeight / scrollHeight)
  const scrollbarTop = listHeight * (scrollTop / scrollHeight)
  ref.current?.setStyleProperties({
    height: `${scrollbarHeight}px`,
    top: `${scrollbarTop}px`,
  })
}

interface NiceScrollbarMTS { "main-thread:ref": RefObject<MainThread.Element> }

export const NiceScrollbarMTS: FC<NiceScrollbarMTS> = (props) => {
  return (
    <view
      main-thread:ref={props["main-thread:ref"]}
      className="scrollbar"
      style={{ right: "14px", backgroundColor: "darkkhaki" }}
    >
      <view className="scrollbar-effect glow" />
    </view>
  )
}

NiceScrollbarMTS.displayName = 'NiceScrollbarMTS'
