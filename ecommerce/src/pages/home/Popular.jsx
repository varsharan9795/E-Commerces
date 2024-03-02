import React from 'react'
import { Link } from 'react-router-dom'
import popular from '../../assets/images/popular.jpg'
import popular1 from '../../assets/images/popular.jpg'
import popular2 from '../../assets/images/popular2.jpg'
import popular3 from '../../assets/images/popular3.png'
import popular4 from '../../assets/images/popular4.jpg'
export const Popular = () => {
    return (
        <div className=' flex flex-col md:flex-row items-center gap-4'>
            <p className='font-semibold uppercase text-center
         bg-slate-950 text-white md:p-1.5 p-2 rounded-sm inline-flex
         md:-rotate-90
         '>Explore new and popular styles</p>
         <div>
            <Link to="/"><img src={popular} alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
         </div>
<div className='md:w-1/2'>
<div className='grid grid-cols-2 gap-2'>
<Link to="/"><img src={popular1} alt=""   className='w-full h-[400px]   hover:scale-105 transition-all duration-200'/></Link>
<Link to="/"><img src={popular2} alt=""   className='w-full h-[400px] hover:scale-105 transition-all duration-200'/></Link>
<Link to="/"><img src={popular3} alt=""   className='w-full h-[400px]  hover:scale-105 transition-all duration-200'/></Link>
<Link to="/"><img src={popular4} alt=""  className='w-full h-[400px] hover:scale-105 transition-all duration-200' /></Link>
</div>
</div>

        </div>
    )
}
