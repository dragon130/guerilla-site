import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Properties from './components/Properties';
import Information from './components/Information';
import Footer from './components/Footer';

import HouseImage from './assets/images/house.png';

function App() {
  return (
    <div>
      <div className="bg-[#afd4e2] pt-[55px] pb-[175px] relative">
        <div className="container mx-auto">
          <Header />
          <Banner />
        </div>
        <div className="absolute right-0 bottom-0">
          <img src={HouseImage} alt="house" />
        </div>
      </div>

      <div className="pb-[48px]">
        <div className="container mx-auto">
          < Properties />
        </div>
      </div>

      <div className="pb-[150px]">
        <div className="container mx-auto">
          < Information />
        </div>
      </div>

      <div className="bg-[#1E3240] pt-[94px] pb-[45px]">
        <div className="container mx-auto">
          < Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
