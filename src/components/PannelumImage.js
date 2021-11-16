import React from 'react';
import { Pannellum } from 'pannellum-react';
const PannellumImage = () => {
  let height = (window.innerHeight * 85) / 100;
  let width = (window.innerWidth * 70) / 100;
  return (
    <Pannellum
      // width={width}
      height={height}
      image="img/360/coloa1.jpg"
      pitch={5}
      yaw={0}
      hfov={130}
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
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="Info Hotspot Text 3"
        URL="https://github.com/farminf"
      />
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-107}
        text="Info Hotspot Text 4"
        URL="https://github.com/farminf"
      />
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
