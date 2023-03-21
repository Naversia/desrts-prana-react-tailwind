import React from 'react'
import desertImage from "../assets/desertPranaTea.jpg";
import Hero2 from '../components/Hero2';
import Carousel from '../components/Carousel';
import Search from '../components/Search';
import Selects from '../components/Selects';
import Layout from '../components/Layout';



function Therapies() {
    return (
      <Layout>
        <Hero2
        image={desertImage}
        title="Therapies in Desert's Prana"
        subtitle="Oasis in the middle of the desert"
      />
        <Search />
        <Selects />
        <Carousel />
      </Layout>
    );
  }
    
export default Therapies