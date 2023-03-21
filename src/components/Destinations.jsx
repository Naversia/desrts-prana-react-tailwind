import React from 'react'

import DesertPranaplace from '../assets/desertPranaplace.jpg';
import DesertPranaTea from '../assets/desertPranaTea.jpg';
import DesertPranaZola from '../assets/desertPranaZola.jpg';
import DesertPranamedTent from '../assets/desertPranamedTent.jpg';
import DesertPrana from '../assets/desertPrana.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1920px] mx-auto py-16 px-4 text-center'>
        <h1>Our Natural Resort</h1>
        <p className='py-4'>On the Arava Desert</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={DesertPranaplace} alt="/" />
            <img className='w-full h-full object-cover' src={DesertPranaTea} alt="/" />
            <img className='w-full h-full object-cover' src={DesertPranaZola} alt="/" />
            <img className='w-full h-full object-cover' src={DesertPranamedTent} alt="/" />
            <img className='w-full h-full object-cover' src={DesertPrana} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations