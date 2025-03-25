import type { FC } from '@lynx-js/react'

import { useEffect, useMainThreadRef, useRef } from '@lynx-js/react'
import type { MainThread, ScrollEvent } from '@lynx-js/types'
import type { NodesRef } from '@lynx-js/types'
import { LikeImageCard } from './LikeImageCard.jsx'
import type { Picture } from './FurniturePictures.jsx'
import { calculateEstimatedSize } from '../utils/size.js'
import { NiceScrollbar, type NiceScrollbarRef } from './NiceScrollbar.jsx'
import { adjustScrollbarMTS, NiceScrollbarMTS } from './NiceScrollbarMTS.jsx'

export const Gallery = (props: { pictureData: Picture[] }) => {
  const { pictureData } = props;
  const scrollbarRef = useRef<NiceScrollbarRef>(null);
  const scrollbarMTSRef = useMainThreadRef<MainThread.Element>(null);
  const galleryRef = useRef<NodesRef>(null);

  const onScrollMTS = (event: ScrollEvent) => {
    "main thread";
    adjustScrollbarMTS(
      event.detail.scrollTop,
      event.detail.scrollHeight,
      scrollbarMTSRef,
    );
  };

  const onScroll = (event: ScrollEvent) => {
    scrollbarRef.current?.adjustScrollbar(
      event.detail.scrollTop,
      event.detail.scrollHeight,
    );
  };

  useEffect(() => {
    galleryRef.current
      ?.invoke({
        method: "autoScroll",
        params: {
          rate: "60",
          start: true,
        },
      })
      .exec();
  }, []);

  return (
    <view className="gallery-wrapper">
      {/* <NiceScrollbar ref={scrollbarRef} /> */}
      <NiceScrollbarMTS main-thread:ref={scrollbarMTSRef} />
      <list
        ref={galleryRef}
        className="list"
        list-type="waterfall"
        column-count={2}
        scroll-orientation="vertical"
        custom-list-name="list-container"
        bindscroll={onScroll}
        main-thread:bindscroll={onScrollMTS}
      >
        {pictureData.map((picture: Picture, index: number) => (
          <list-item
            estimated-main-axis-size-px={calculateEstimatedSize({
              pictureWidth: picture.width,
              pictureHeight: picture.height
            })}
            item-key={`${index}`}
            key={`${index.toString()}`}
          >
            <LikeImageCard picture={picture} />
          </list-item>
        ))}
      </list>
    </view>
  );
};

export default Gallery;