import { useState, useEffect } from 'react';
import { Navigation } from './components/navigation';
import { Header } from './components/header';
import { GioiThieu } from './components/GioiThieu';
import { KienTruc } from './components/KienTruc';
import { Tour } from './components/Tour';
import { ThuVienAnh } from './components/ThuVienAnh';
import { Testimonials } from './components/testimonials';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import JsonData from './data/data.json';
import SmoothScroll from 'smooth-scroll';
import './App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState(
    {}
  );
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <GioiThieu data={landingPageData.GioiThieu} />
      <KienTruc data={landingPageData.KienTruc} />
      <Tour data={landingPageData.Tour} />
      <ThuVienAnh data={landingPageData.ThuVienAnh} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

export default App;
