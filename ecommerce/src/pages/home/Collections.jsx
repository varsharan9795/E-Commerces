import React from 'react'
//import collection from '../../assets/images/collection.jpg'
import zaralogo from '../../assets/images/zaralogo.png'
export const Collections = () => {
  return (
    <div className='bg-[url("assets/images/collection.jpg")] bg-cover bg-center bg-no-repeat flex items-center  
    justify-between'>
      
      <div className='h-[500px]  justify-between md:flex-row'>
       
        <div className='md:w-1/2'>
       
        </div>
        <div className='md:w-1/2 md:mx-52 my-6 text-center'>
          <img src={zaralogo} alt="" className='w-28 mx-40'/>
          <p className='text-white text-lg capitalize my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The new evening wear collection exclusively
           offered at the reopened Giorgio Armani boutique in Los Angeles.</p>
           <button className=' bg-white text-black h-9 p-2 flex items-center justify-between md:mx-48 ml-48'>See Collection</button>
        </div>
      </div>
      <img src={zaralogo} alt="" className=' md:h-40 opacity-5'/>
    </div>

  )
}
