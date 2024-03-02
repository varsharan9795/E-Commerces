import React from 'react'
import { Banner } from './Banner'
import Category from './Category'
import { Popular } from './Popular'
import { Product } from './Product'
import { Collections } from './Collections'
import { BestSellers } from './BestSellers'
import NewsLetters from './NewsLetters'
import Footer from './Footer'

const Home = () => {
  return (
   
    <div>
      <Banner/>
      <Category/>
      <Popular/>
      <Product/>
      <Collections/>
      <BestSellers/>
      <NewsLetters/>
      <Footer/>
    </div>
  )
}

export default Home;