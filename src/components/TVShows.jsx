import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Nicon from "../assets/Neticon.png"
import Badge from "../assets/Top10Badge.png"
import Info from "../assets/info.png"
import Plus from "../assets/plus.png"
import Play from "../assets/Play.png"
import Video4 from "../assets/video4.mp4"
import Rectangle2 from '../assets/Rectangle 2.png'
import Neticon from '../assets/Neticon.png'
import { FiSearch } from 'react-icons/fi'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { BsDot } from 'react-icons/bs'
import { setUserIcon, setUsername } from '../store/netSlice'
import { useSelector } from 'react-redux'
import Movies from './Movie'
import requests from './request'
import Navbar from './Navbar'
import Footer from './Footer'
import Movie from './Movie';
import Top10 from './Top10';
import PopUp from './PopUp';


const TVShows = () => {

  const user = useSelector((state) => state.net.username)
  const addIcon = useSelector((state) => state.net.userIcon)

  return (
    <div>
    <Navbar />
    <div className=' flex items-center justify-center overflow-hidden'>
    
      <div className='lg:block h-[40%] w-full absolute top-0 left-0 right-0 sm:block md:block hidden'>
        <video autoPlay muted className="w-full lg:block overflow-hidden md:block sm:block sm:h-[70%] hidden object-cover lg:h-screen">
          <source src={Video4} type="video/mp4" />
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

     
      <div className='text-white sm:hidden h-screen lg:hidden block bg-black px-4'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-bold'>For {user}</h1>

          <div className='flex gap-6 items-center'>
            <FiSearch size={25} />
            <img src={addIcon} className='h- w-8' />
          </div>

        </div>
        <div className='flex gap-3 pt-4'>
          <p className='border border-gray py-1 px-3 font-bold rounded-full'>TV Shows</p>
          <p className='border border-gray py-1 px-3 font-bold rounded-full'>Movies</p>
          <div className='border border-gray py-1 px-3 font-bold rounded-full flex items-center gap-1'>
            <p >Categories</p>
            <IoIosArrowDown />
          </div>
        </div>
        <div>
          <div className='flex justify-center pt-6 relative'>
            <img className='border-[0.5px] border-gray rounded-xl h-[470px] w-full' src='https://images.pexels.com/photos/12273121/pexels-photo-12273121.jpeg?auto=compress&cs=tinysrgb&w=300' />
            <div className={`absolute  flex items-center bottom-12  p-12 text-white`}>
              <img src={Neticon} className='w-6 h-6' />
              <h2 className='font-bold tracking-widest text-xs'>SERIES</h2>
            </div>
            <div className='flex items-center p-10 absolute bottom-7 text-white'>
              <p>Swoonworthy</p>
              <BsDot size={30} />
              <p>Romantic</p>
              <BsDot size={30} />
              <p>Comedy</p>
            </div>
            <div className='flex gap-4 mt-4 justify-center mx-4 absolute bottom-2 '>
              <div className='w-[150px] h-[40px] bg-white flex items-center justify-center gap-2 rounded'>
                <img src={Play} />
                <p className='text-black'>Play</p>
              </div>
              <div className='w-[150px] h-[40px] bg-gray bg-opacity-0.8 flex items-center justify-center gap-2 rounded'>
                <img src={Plus}></img>
                <p>My List</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  top-[20%] lg:top-[80%] left-0 right-0">
      <Movie title="US TV Shows" movieURL={requests.trending} />
      </div>
      <div className='absolute top-[40%] bg-black lg:top-[105%] left-0 right-0'>
      <Movie title="Continue Watching for Sassy_leo" movieURL={requests.topRated} />
      <Movie title="Trending Now" movieURL={requests.popular} />
      <Top10/>
      <Movie title="Romantic Korean TV Shows" movieURL={requests.upcoming} />
      <Footer/>
      </div>
      
     
      

      
    </div>
</div>









  )
}

export default TVShows