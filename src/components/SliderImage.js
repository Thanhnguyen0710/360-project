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
          data-srcset="https://i.pinimg.com/originals/cb/c2/2c/cbc22ca5a3d7568a742262639a9f6b3f.jpg"
          type="image/jpg"
        />
        <img
          key="01"
          src="https://i.pinimg.com/originals/cb/c2/2c/cbc22ca5a3d7568a742262639a9f6b3f.jpg"
          alt="First Thumbnail"
          height="70"
        />
      </picture>,
      <picture>
        <source
          data-srcset="https://i.pinimg.com/originals/cb/c2/2c/cbc22ca5a3d7568a742262639a9f6b3f.jpg"
          type="image/jpg"
        />
        <img
          key="02"
          src="https://i.pinimg.com/originals/cb/c2/2c/cbc22ca5a3d7568a742262639a9f6b3f.jpg"
          alt="Second Thumbnail"
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
        <PannellumImage />
      </div>
      <div>
        <PannellumImage />
      </div>
    </Carousel>
    // </Container>
  );
};

export default SliderImage;
