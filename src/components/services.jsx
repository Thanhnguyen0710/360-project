import PannellumImage from "./PannelumImage"

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Tour du lịch Cổ Loa</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  {d.image && 
                  <a href='./img/360/coloa1.jpg' ><img src={d.image} style={{width:"320px", height: "150px", borderRadius: "20px"}} /></a>}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    
                    {/* <p>{d.text}</p> */}
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
