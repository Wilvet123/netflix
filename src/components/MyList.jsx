import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Nicon from "../assets/Neticon.png"
import Badge from "../assets/Top10Badge.png"
import Info from "../assets/info.png"
import Plus from "../assets/plus.png"
import Play from "../assets/Play.png"
import Video1 from "../assets/video1.mp4"
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


const MyList = () => {

  const user = useSelector((state) => state.net.username)
  const addIcon = useSelector((state) => state.net.userIcon)

  return (
    <div className='bg-black'>
    
      <Movie  movieURL={requests.trending} />
      
     
      <Movie title="Continue Watching for Sassy_leo" movieURL={requests.topRated} />
      <Movie title="Popular on Netflix" movieURL={requests.popular} />
      <Top10/>
      <Movie title="Only on Netflix" movieURL={requests.upcoming} />
      <PopUp/>
      <Footer/>
      
</div>









  )
}

export default MyList