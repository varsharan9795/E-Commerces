import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();

                const product = data.filter((p) => p.id == id);
                console.log(product);
                setProducts(product[0]);


            }
            catch (error) {
                console.log("error fetching data:", error);
            }
        }
        fetchData();
        window.scrollTo({top:0, behavior:'smooth'});
    }, [id]);

    const { title, category, price, image, status } = products;
    //console.log(id); 

    return (
        <div className='mt-40 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
            <div className='p-3 max-w-7xl m-auto'>

<div  >
    <a href="/"  className='text-gray-500 font-bold '>Home</a>
    <a href="/shop"  className=' font-bold'> / Shop</a>
</div>

                <div className='mt-6 sm:mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                        <div>
                            <img src={image} alt="" className='w-full' />
                        </div>

                        {/* product detail */}
                        <div>
                            <h1 className='font-bold text-2xl'>{title}</h1>
                            <p className='mt-6 text-gray-600 text-base leading-6 text-justify sm:text-left
                            sm:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod odio eligendi omnis. Nesciunt aspernatur, ipsam beatae et eos,

                                nostrum repellat dignissimos earum omnis placeat esse sint vel quo nam?</p>

                            <span className='flex my-2 text-xl text-yellow-600 gap-2 sm:my-4'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <p className='text-2xl font-bold text-red-500 sm:text-2xl'>${price}</p>

                            <div className='mt-6'>
                                <div className='text-left flex flex-col gap-2 w-full'>
                                    <label className='font-semibold'>Quantity</label>
                                    <input type='number' name='price' id='price' defaultValue={1} required className='border border-gray-300 font-semibold
                                    text-sm mb-2 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-600'/>
                                </div>
                            </div>

                            <div className=''>
                                <button className='flex items-center justify-center  text-white
    font-bold bg-red-600 gap-2 w-full py-3 px-4 rounded-md ease-in-out 
    duration-150 shadow-slate-600 hover:text-red-600 hover:bg-white lg:m-0 md:px-6'>Confirmed Order <span><FaArrowAltCircleRight /></span></button>
                            </div>

                        </div>



                    </div>
                </div>
<div className='text-slate-900 mt-12'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem veniam rerum culpa praesentium expedita doloremque
         repellat et quod! Quisquam, commodi soluta assumenda quasi ipsam temporibus delectus quam dicta obcaecati.</p>


         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem veniam rerum culpa praesentium expedita doloremque
         repellat et quod! Quisquam, commodi soluta assumenda quasi ipsam temporibus delectus quam dicta obcaecati.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem veniam rerum culpa praesentium expedita doloremque
         repellat et quod! Quisquam, commodi soluta assumenda quasi ipsam temporibus delectus quam dicta obcaecati.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem veniam rerum culpa praesentium expedita doloremque
         repellat et quod! Quisquam, commodi soluta assumenda quasi ipsam temporibus delectus quam dicta obcaecati.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem veniam rerum culpa praesentium expedita doloremque
         repellat et quod! Quisquam, commodi soluta assumenda quasi ipsam temporibus delectus quam dicta obcaecati.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem veniam rerum culpa praesentium expedita doloremque
         repellat et quod! Quisquam, commodi soluta assumenda quasi ipsam temporibus delectus quam dicta obcaecati.</p>
         

</div>

            </div>
        </div>
    )
}

export default SingleProduct
