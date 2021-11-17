import * as React from 'react';
import Modal from '@mui/material/Modal';
import SliderImage from './SliderImage';
import PannellumImage from './PannelumImage';

export const Services = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div id="tour" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tour du lịch Cổ Loa</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4"
                >
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  {d.image && (
                    <img
                      src={d.image}
                      style={{
                        width: '320px',
                        height: '150px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                      }}
                      onClick={handleOpen}
                    />
                  )}
                  <div className="service-desc">
                    <h3>{d.name}</h3>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      style={{ paddingTop: '35px' }}
                    >
                      <SliderImage />
                    </Modal>
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
