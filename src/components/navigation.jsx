export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">
              Toggle navigation
            </span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
          >
            Co Loa Citadel <br></br>
            Structure
          </a>{' '}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#intro" className="page-scroll">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#structure" className="page-scroll">
                Kiến trúc
              </a>
            </li>
            <li>
              <a href="#tour" className="page-scroll">
                Tour
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll">
                THƯ VIỆN ẢNH
              </a>
            </li>
            {/* <li>
              <a
                href="#testimonials"
                className="page-scroll"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            {/* <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
