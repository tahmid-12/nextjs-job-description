"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import HowItWork from './HowItWork/HowItWork'
import About from './About/About'
import Feature from './Feature/Feature'
import ClientReview from './ClientReview/ClientReview'
import MobileApp from './MobileApp/MobileApp'

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();

  },[]);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Restaurant />
      <Category />
      <HowItWork />
      <About />
      <Feature />
      <ClientReview />
      <MobileApp />
    </div>
  )
}

export default Home