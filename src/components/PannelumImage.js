import React from 'react';
import { Pannellum } from 'pannellum-react';
const PannellumImage = ({
  path,
  hfov,
  pitchInfo,
  yawInfo,
  info,
}) => {
  let height = (window.innerHeight * 85) / 100;
  let width = (window.innerWidth * 70) / 100;
  return (
    <Pannellum
      // width={width}
      height={height}
      image={path}
      pitch={5}
      yaw={0}
      // hfov={hfov}
      autoLoad
      author=""
      title=""
      orientationOnByDefault={false}
      draggable
      keyboardZoom
      mouseZoom
      preview=""
      previewAuthor=""
      previewTitle=""
      showControls
      showFullscreenCtrl
      showZoomCtrl
      hotspotDebug={false}
    >
      {/* <Pannellum.Hotspot
        type="info"
        pitch={pitchInfo}
        yaw={yawInfo}
        text={info}
        URL="https://github.com/farminf"
      /> */}
      {/* <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, args) =>
            this.hanldeClickImage(evt, args)
          }
          handleClickArg={{ name: 'test' }}
        /> */}
    </Pannellum>
  );
};

export default PannellumImage;
