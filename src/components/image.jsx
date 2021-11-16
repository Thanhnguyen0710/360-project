import * as React from 'react';

import Modal from '@mui/material/Modal';

import SliderImage from './SliderImage';

export const Image = ({
  title,
  largeImage,
  smallImage,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <div className="portfolio-item">
        <div className="hover-bg">
          {' '}
          <div className="hover-text">
            <h4 onClick={handleOpen}>{title}</h4>
          </div>
          <img
            src={smallImage}
            className="img-responsive"
            alt={title}
          />{' '}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ paddingTop: '35px' }}
      >
        <SliderImage />
      </Modal>
    </React.Fragment>
  );
};
