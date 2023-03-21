import React from 'react';
import Carousel from '../components/Carousel';
import Destinations from '../components/Destinations';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Selects from '../components/Selects';
import desertImage from "../assets/desertPrana.jpg";
import Layout from '../components/Layout';


function Home() {
  return (
    <Layout>
      <Hero2
      image={desertImage}
      title="Desert's Prana"
      subtitle="Oasis in the middle of the desert"
    />
      <Destinations />
      <Search title="Your Desert Nirvana" subtitle="Welcome to Desert's Prana, a peaceful oasis located in Idan, Arava in the south of Israel. We invite you to experience the ultimate in relaxation and rejuvenation with our range of holistic therapies, including yoga, acupuncture, shiatsu, cupping, meditation, cognitive behavioral therapy (CBT), and more.

Our serene desert setting provides the perfect backdrop for your healing journey. With a beautiful terrace offering stunning views of the desert landscape, you can enjoy the peace and tranquility of the outdoors while receiving top-quality care from our expert therapists.

Whether you're a solo traveler seeking some alone time, a couple looking for a romantic getaway, or a family of 4 to 8 people wanting to bond and recharge, our spacious rooms can accommodate your needs. Each room is designed with your comfort in mind, offering modern amenities and stylish decor to create a serene and relaxing environment.

At Desert's Prana, we believe in taking a holistic approach to health and wellness. Our experienced therapists will work with you to create a personalized treatment plan that addresses your unique needs and goals. Whether you're seeking relief from stress, pain, or other health concerns, our therapies are designed to help you feel your best.

So why wait? Book your stay at Desert's Prana today and experience the ultimate in relaxation and rejuvenation. Let us help you tap into the healing power of the desert and find your inner peace."/>
      <Selects />
      <Carousel />
    </Layout>
  );
}

export default Home;
