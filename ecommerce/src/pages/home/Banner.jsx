import React from 'react'
import banner from '../../assets/images/banner.jpg'
import { FaShoppingBag } from "react-icons/fa";
import Bannercard from './Categorycard';


export const Banner = () => {
  return (
    <div className='bg-primaryBG py-28 xl:px-28 px-4'>
        <div className='py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
        <div className='md:w-1/2'>
                <img src={banner} alt="" className='h-96 w-80 rounded-bl-3xl border-[3px]' />
            </div>
        <div className='md:w-1/2'>
                <h1 className='text-5xl font-light mb-5'>Collection</h1>
                <p className='text-xl mb-7'>you can explore ans shop many differnt collection
from various barands here.</p>
<button className='bg-slate-900 hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-xl flex items-center gap-2'>
  < FaShoppingBag/>Shop Now</button>
            </div>

          
        </div>
    </div>
  )
}
