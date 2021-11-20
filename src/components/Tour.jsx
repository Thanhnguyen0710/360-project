import * as React from 'react';
import Modal from '@mui/material/Modal';

export const Tour = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div id="tour" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tour du lịch Cổ Loa</h2>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-sm-4"
                  >
                    {' '}
                    {d.image && (
                      <img
                        src={d.image}
                        style={{
                          width: '320px',
                          height: '150px',
                          borderRadius: '20px',
                          cursor: 'pointer',
                        }}
                      />
                    )}
                    <div className="service-desc">
                      <h3><button onClick={() => window.location.href=d.linkTour}>{d.name}</button></h3>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    </div>
  );
};
