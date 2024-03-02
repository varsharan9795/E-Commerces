
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



export const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data))

  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Selers");
  //console.log(bestSellers);

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28'>
      <div>
        <h2 className='text-center font-semibold text-4xl'>Best Sellers</h2>
        <p className='text-black/75 capitalize md:w-2/3 mx-auto mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus aspernatur temporibus odit sapiente? Inventore alias neque fugiat dolore repudiandae blanditiis et reiciendis tempore illo?
          Nemo dolorem vitae cumque libero est?</p>
      </div>

      {/* best sellor products */}
      <div className='mt-16'>
      <Swiper
  slidesPerView={1}  // Corrected the prop name
  spaceBetween={10}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}


  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }}

  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
>
{
  bestSellers.map((product) => ( // Fixed variable name 'products' to 'product'
    <SwiperSlide key={product.id}>
      <Link to={`/shop/${product.id}`}>
        <img src={product.image} alt={product.name} className='mx-auto w-full hover:scale-105 transition-all' />
      </Link>

      <div className='mt-4 px-4'>
        <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
        <div className='flex justify-between'>
          <p className='text-slate-900/50'>{product.category}</p>
          <p className='font-semibold'>${product.price}</p>
        </div>
      </div>
    </SwiperSlide>
  ))
}

        </Swiper>
      </div>

    </div>
  )
}
