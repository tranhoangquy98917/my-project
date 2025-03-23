import React from 'react'

import bannerImg from "../../assets/books/banner.jpg"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Website of the denim cases group</h1>
            <p className='mb-10'>A website for the Denim Cases Group, specializing in customizable phone cases. Users can select phone models, choose colors, and upload their own sticker designs. The site supports custom orders and real-time previews.</p>

            <button className='btn-primary'>Subscribe</button>
        </div>

       
    </div>
  )
}

export default Banner