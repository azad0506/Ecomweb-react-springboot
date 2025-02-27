import React from 'react'
import HomeCaresol from '../components/HomeCaresol'
import HomeSectionCarelo from '../components/HomeSectionCaresol/HomeSectionCarelo'
import { mens_kurta } from '../../Data/mens_kurta'
import { mens_shoes } from '../../Data/mens_shoes'

const HomePage = () => {
  return (
    <div>
      
      <HomeCaresol/>

      <div className='space-y-10 py-20'>
        <HomeSectionCarelo data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarelo data={mens_shoes} sectionName={"Men's Shoes"}/>
        <HomeSectionCarelo data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarelo data={mens_kurta} sectionName={"Women's Sharee"}/>
      </div>
    </div>
  )
}

export default HomePage
