import { Container } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import PannellumImage from './PannelumImage';

// const  renderCustomThumbs =() => {

// 	const siteUrl = API_URL
// 	const thumbList = images.map((product, index) =>
// 	<picture key={index}>
// 	<source data-srcSet={`${siteUrl}${product.url}`} type="image/jpg" />
// 	  <img
// 		key={product._id}
// 		src= {`${siteUrl}${product.url}`}
// 		alt={product.alternativeText}
// 		height="70"
// 	  />

// 	</picture>
// 	)

// return(thumbList)

const SliderImage = () => {
  const renderCustomThumbs = () => {
    return [
      <picture>
        <source
          data-srcset="img/360/CuaDen1.jpg"
          type="image/jpg"
        />
        <img
          key="01"
          src="img/360/CuaDen1.jpg"
          height="70"
        />
      </picture>,
      <picture>
        <source
          data-srcset="img/360/DenTho1.jpg"
          type="image/jpg"
        />
        <img
          key="02"
          src="img/360/DenTho1.jpg"
          height="70"
        />
      </picture>,
      <picture>
        <source
          data-srcset="img/360/DenTho2.jpg"
          type="image/jpg"
        />
        <img
          key="03"
          src="img/360/DenTho2.jpg"
          height="70"
        />
      </picture>,
      <picture>
        <source
          data-srcset="img/360/DenTho3.jpg"
          type="image/jpg"
        />
        <img
          key="04"
          src="img/360/DenTho3.jpg"
          height="70"
        />
      </picture>,
      <picture>
        <source
          data-srcset="img/360/TruocDen1.jpg"
          type="image/jpg"
        />
        <img
          key="05"
          src="img/360/TruocDen1.jpg"
          height="70"
        />
      </picture>,
      <picture>
        <source
          data-srcset="img/360/TruocDen2.jpg"
          type="image/jpg"
        />
        <img
          key="06"
          src="img/360/TruocDen2.jpg"
          height="70"
        />
      </picture>,
    ];
  };
  return (
    // <Container>
    <Carousel
      showArrows={true}
      renderThumbs={renderCustomThumbs}
    >
      <div>
        <PannellumImage
          path="img/360/CuaDen1.jpg"
          hfov={130}
          pitchInfo={10}
          yawInfo={10}
          info="Something"
        />
      </div>
      <div>
        <PannellumImage
          path="img/360/DenTho1.jpg"
          hfov={130}
          pitchInfo={10}
          yawInfo={10}
          info="Something"
        />
      </div>
      <div>
        <PannellumImage
          path="img/360/DenTho2.jpg"
          hfov={130}
          pitchInfo={10}
          yawInfo={10}
          info="Something"
        />
      </div>
      <div>
        <PannellumImage
          path="img/360/DenTho3.jpg"
          hfov={130}
          pitchInfo={10}
          yawInfo={10}
          info="Something"
        />
      </div>
      <div>
        <PannellumImage
          path="img/360/TruocDen1.jpg"
          hfov={130}
          pitchInfo={10}
          yawInfo={10}
          info="Something"
        />
      </div>
      <div>
        <PannellumImage
          path="img/360/TruocDen2.jpg"
          hfov={130}
          pitchInfo={10}
          yawInfo={10}
          info="Something"
        />
      </div>
    </Carousel>
    // </Container>
  );
};

export default SliderImage;
