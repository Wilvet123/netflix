import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Nicon from "../assets/Neticon.png"
import Badge from "../assets/Top10Badge.png"
import Info from "../assets/info.png"
import Plus from "../assets/plus.png"
import Play from "../assets/Play.png"
import Video3 from "../assets/video3.mp4"
import Rectangle2 from '../assets/Rectangle 2.png'
import Neticon from '../assets/Neticon.png'
import { FiSearch } from 'react-icons/fi'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoIosArrowDown, IoMdArrowDropdown } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'
import { setUserIcon, setUsername } from '../store/netSlice'
import { useSelector } from 'react-redux'
import Movie from './Movie'
import requests from './request'
import Navbar from './Navbar'
import Footer from './Footer'
import Top10 from './Top10';
import PopUp from './PopUp';


const Movies = () => {
 const [scroller, setScroller] = useState(false)
  const user = useSelector((state) => state.net.username)
  const addIcon = useSelector((state) => state.net.userIcon)
  const useScroll = () => {
    if (window.scrollY > 0) {
      setScroller(true)
    }
    else {
      setScroller(false)
    }
  }
  window.addEventListener('scroll', useScroll)
  return (
    <div>
    <Navbar />
    <div className= {` ${scroller ? 'bg-black' : 'bg-transparent'} z-50 fixed top-16 py-6 px-20  w-full flex items-center text-white gap-12 `}>
      <h1 className='text-4xl font-bold'>Movies</h1>
      <div className='h-9 w-32 bg-black border flex items-center justify-center gap-4 border-white'>
      <h1 className='text-white font-bold text-xl'>Genres</h1>
      <IoMdArrowDropdown size={20}/>
      </div>
    </div>
    <div className=' flex items-center justify-center overflow-hidden'>
    
      <div className='lg:block h-[40%] w-full absolute top-0 left-0 right-0 sm:block md:block hidden'>
        <video autoPlay muted className="w-full lg:block overflow-hidden md:block sm:block sm:h-[70%] hidden object-cover lg:h-screen">
          <source src={Video3} type="video/mp4" />
        </video>
        <div className='absolute  flex items-center top-64 p-12 text-white'>
          <img src={Neticon} className='w-24 h-24' />
          <h2 className='font-bold tracking-widest text-3xl'>SERIES</h2>
        </div>
        <div className='flex gap-4 mt-4 justify-center mx-4 absolute lg:left-16 sm:left-0 sm:top-[30%] lg:top-[150%]  '>
          <div className='lg:w-44 lg:h-16 sm:h-8 sm:w-20 bg-white hover:bg-midGray hover:bg-opacity-60 flex items-center justify-center lg:gap-2 sm:gap-0 rounded'>
            <FaPlay size={28}  className='sm:h-4 sm:w-7 lg:h-7' />
            <p className='text-black lg:text-2xl sm:text-sm ml-2 sm:ml-1 font-bold'>Play</p>
          </div>
          <div className='lg:w-60 font-bold lg:h-16 sm:h-8 sm:w-36 text-white bg-gray bg-opacity-70 hover:bg-opacity-50 flex items-center justify-center lg:gap-2 sm:gap-0 rounded'>
            <AiOutlineInfoCircle size={31} className='sm:h-4 sm:w-7 lg:h-7' />
            <p className="  text-white sm:text-sm lg:text-2xl ml-2">More Info</p>
          </div>
        </div>
      </div>

     
      
      <div className="absolute  top-[20%] lg:top-[80%] left-0 right-0">
      <Movie title="Family Movie Night" movieURL={requests.trending} />
      </div>
      <div className='absolute top-[40%] bg-black lg:top-[105%] left-0 right-0'>
      <Movie title="Trending Now" movieURL={requests.topRated} />
      <Movie title="Romantic Movies" movieURL={requests.popular} />
      <Top10/>
      <Movie title="Blockbuster Movies" movieURL={requests.upcoming} />
      <Footer/>
      </div>
      
     
      

      
    </div>
</div>









  )
}

export default Movies