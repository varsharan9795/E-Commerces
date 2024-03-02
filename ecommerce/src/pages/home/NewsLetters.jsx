import React from 'react'
import { Link } from 'react-router-dom'
import news1 from '../../assets/images/news1.png'
import news2 from '../../assets/images/news2.png'
import news3 from '../../assets/images/news3.png'
import news4 from '../../assets/images/news4.png'
import news5 from '../../assets/images/news5.png'
import news6 from '../../assets/images/news6.png'


const NewsLetters = () => {
  return (
    <div className='bg-[#E2832] bg-opacity-5 xl:px-28 px-4 py-16 '>
      <h2 className='text-center font-semibold text-4xl my-5'>Follow Products and Discount on Instagram</h2>
      <div className='flex items-center justify-center mb-20 gap-4'>
        <Link to="/">

          <img src={news1} alt="" />
        </Link>
         <Link to="/">

          <img src={news2} alt="" />
        </Link>
         <Link to="/">

          <img src={news3} alt="" />
        </Link>
         <Link to="/">

          <img src={news4} alt="" />
        </Link>
         <Link to="/">

          <img src={news5} alt="" />
        </Link>
         <Link to="/">

          <img src={news6} alt="" />
        </Link>

      </div>

<div>
  <h2 className='text-center font-semibold text-4xl'>Or subscribe to the newsletter</h2>
<form className='md:w-1/2 mx-auto text-center '>
<input type="email" name="email" id="email" placeholder='Email Address.....' className='h-8
bg-transparent outline-none border-b-2 pl-2 border-slate-950 md:w-2/3 w-full
mb-5 placeholder:text-gray-950 mr-4' />
<input type="submit" value={"submit"} className='bg-slate-900 text-white px-6 py-1 rounded-sm' />
</form>
</div>

    </div>
  )
}

export default NewsLetters
