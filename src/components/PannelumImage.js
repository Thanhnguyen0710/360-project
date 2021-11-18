import React from 'react';
import { Pannellum } from 'pannellum-react';
const PannellumImage = ( props) => {
  // let height = (window.innerHeight * 85) / 100;
  // let width = (window.innerWidth * 70) / 100;
  console.log(props)
  let height = window.innerHeight;
  let width = window.innerWidth;
  return (
    <Pannellum
      width={width}
      height={height}
      // image={path}
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
