import * as React from 'react';

import Modal from '@mui/material/Modal';

import { ModalBody } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

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
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'primary',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img
            src={largeImage}
            className="img-responsive"
            alt={title}
          />{' '}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};
