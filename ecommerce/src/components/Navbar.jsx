import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "../assets/images/logo1.svg"
import { Link } from 'react-router-dom';

export const Navbar = () => {


  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home and Living", path: "/" },
    { title: "Wedding and Party", path: "/" },
    { title: "Toy and Entertainment", path: "/" },
    { title: "Art and Collection", path: "/" },
  ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center container mg:py-4 pt-6 pb-3'>
        <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block' />
        <a href=""><img src={logo} alt="" className='h-20 w-44' /></a>
        <div className='justify-end text-lg text-black sm:flex items-center gap-4 hidden'>
          <a href="/" className='flex items-center gap-2'><FaUser />Account</a>
          <a href="/" className='flex items-center gap-2'><FaShoppingBag />Shopping</a>
        </div>

        {/* navbar for sm device */}
        <div className='sm:hidden '>
          <button onClick={toggleMenu} >

            {
              isMenuOpen ? <FaTimes className='w-5 h-5 text-black' /> : <FaBars className='w-5 h-5 text-black' />
            }
          </button>
        </div>

      </nav>
      <hr />

      {/* categorey name */}

      <div className='pt-4'>
        <ul className='lg:flex items-center justify-between text-black hidden '>
          {
            navItems.map(({ title, path }) => (
              <li key={title} className='hover:text-orange-500  cursor-pointer'>
                <Link to="/">{title}</Link>
              </li>
            ))
          }

        </ul>
      </div>


      {/* only mobile menu items */}

      <div className=''>
        <ul className={`md:hidden bg-Black text-white bg-slate-900 px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
          {
            navItems.map(({ title, path }) => (
              <li key={title} className='hover:text-orange-500 my-10'>
                <Link to="/">{title}</Link>
              </li>
            ))
          }

        </ul>
      </div>

    </header>
  )
}
