import React from 'react'
import Hero from '../Components/Hero/Hero'
import OnStore from './OnStore'
import Offer from '../Components/Offers/Offer'
import NewCollection from '../Components/NewCollections/Newcollection'
import Newsletter from '../Components/NewsLetters/Newsletter'
import Tracker from '../Components/Locationstrack/Tracker'
import Footer from '../Components/Footer/Footer'

function Home() {

  return (
    <div>
    <Hero/>
    <OnStore/>
    <Offer/>
    <NewCollection/>
    <Newsletter/>
      <Tracker/>
      <Footer/>
    </div>
  )
}

export default Home