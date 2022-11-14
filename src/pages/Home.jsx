import React from 'react';
import banner from "@assets/banner.png";
import "@styles/Home.css"


const Home = () => {
  return (
    <div className="App">
      <section className='banner'>
        <div>
          <h1 className=''>JABA Method Solver</h1>
        </div>
        <img src={banner} alt="doctores" className="banner-image" />
      </section>
    </div>
  );
}

export default Home;