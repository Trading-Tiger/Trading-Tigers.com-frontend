// import React from 'react';
// import sections
import Hero from '../components/sections/HeroSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';
import Support from '../components/sections/Support';
import Tokenstates from '../components/sections/Tokenstates';
import Timeline from '../components/sections/Timeline'
import Products from '../components/sections/Products'
import WalletPreview from '../components/sections/WalletPreview'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/*<Support />*/}
      <Tokenstates />
      <FeaturesTiles />
      <WalletPreview />
      <Timeline />
      <Products />
      <Support />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/*<Testimonial topDivider />*/}
      <Cta split />
    </>
    
  );
}

export default Home;