import React from 'react'
import './AboutUs.css' ;
import AboutUsHero from '../../Compontents/AboutUsHero/AboutUsHero';
import AboutTeam from '../../Compontents/AboutTeam/AboutTeam';
import AboutClient from '../../Compontents/AboutClient/AboutClient';
import AboutGroup from '../../Compontents/AboutGroup/AboutGroup';
import UnforgettableMoment from '../../Compontents/UnforgettableMonent/UnforgettableMoment';
export default function AboutUs() {
  return (
    <div className='about-us'>
      <AboutUsHero></AboutUsHero>
      <AboutTeam></AboutTeam>
      <AboutClient></AboutClient>
      <AboutGroup></AboutGroup>
      <UnforgettableMoment></UnforgettableMoment>
    </div>
  )
}
