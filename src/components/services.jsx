export const Services = (props) => {
  return (
    <div id="tour" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Tour du lịch Cổ Loa</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.name}-${i}`}
                    className="col-sm-6"
                  >
                    {' '}
                    {/* <i className={d.icon}></i> */}
                    {d.image && d.link &&  (
                      <a href={d.link}>
                        <img src={d.image} style={{ width: '320px', height: '150px', borderRadius: '20px',}} />
                      </a>
                    )}
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      {/* <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        style={{ paddingTop: '35px' }}
                      >
                        <SliderImage />
                      </Modal> */}
                      {/* <p>{d.text}</p> */}
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
