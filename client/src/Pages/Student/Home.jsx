import React from 'react'
import Hero from '../../Components/Student/Hero'
import Comapnies from '../../Components/Student/Comapnies'
import CourseSection from '../../Components/Student/CourseSection'
import TestimonialSections from './../../Components/Student/TestimonialSections';
import CalltoAction from './../../Components/Student/CalltoAction';
import Footer from '../../Components/Student/Footer';

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <Comapnies/>
      <CourseSection/>
      <TestimonialSections/>
      <CalltoAction/>
      <Footer/>
    </div>
  )
}

export default Home