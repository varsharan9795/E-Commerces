import React from 'react'

import Categorycard from './Categorycard'

import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import brand4 from '../../assets/images/brand4.png'
import brand5 from '../../assets/images/brand5.png'


const Category = (props) => {


    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
            {/* brand logo */}

            <div className='md:flex items-center gap-4 justify-between'>
              <Categorycard url={brand1}/>
              <Categorycard url={brand2}/>
              <Categorycard url={brand3}/>
              <Categorycard url={brand4}/>
              <Categorycard url={brand5}/>
            </div>



            {/* category grid */}
            
        </div>
    )
}

export default Category