import React from 'react'
import Hero from './Hero/Hero'
import Restaurant from './Restaurant/Restaurant'
import Category from './Category/Category'
import HowItWork from './HowItWork/HowItWork'
import About from './About/About'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Restaurant />
      <Category />
      <HowItWork />
      <About />
    </div>
  )
}

export default Home