import React from 'react'

import DesertPranaplace from '../assets/desertPranaplace.jpg';
import DesertPranaTea from '../assets/desertPranaTea.jpg';
import DesertPranaZola from '../assets/desertPranaZola.jpg';
import DesertPranamedTent from '../assets/desertPranamedTent.jpg';
import DesertPranaDorrBambo from '../assets/desertPranaDorrBambo.jpg';
import DesertPrana from '../assets/desertPrana.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1920px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={DesertPranaplace} text='Desert Relaxetion' />
    <SelectsCard bg={DesertPranaTea} text='Desert Chai Shop' />
    <SelectsCard bg={DesertPranaZola} text='Desert Zola' />
    <SelectsCard bg={DesertPranamedTent} text='Desert Rooms' />
    <SelectsCard bg={DesertPranaDorrBambo} text='Desert Location' />
    <SelectsCard bg={DesertPrana} text='Desert Breathing' />
    
        
    </div>
  )
}

export default Selects