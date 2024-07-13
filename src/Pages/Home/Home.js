import React from 'react'
import './Home.css';
import Hero from '../../Compontents/Hero/Hero';
import NaturalScenery from '../../Compontents/NaturalScenery/NaturalScenery';
import ChooseUs from '../../Compontents/ChooseUs/ChooseUs';
import TourPartner from '../../Compontents/TourPartner/TourPartner';
import Testmonial from '../../Compontents/Testmonial/Testmonial';
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <NaturalScenery></NaturalScenery>
      <ChooseUs></ChooseUs>
      <TourPartner></TourPartner>
      <Testmonial></Testmonial>
    </div>
  )
}
