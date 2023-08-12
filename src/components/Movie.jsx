import { React, useState, useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import requests from './request'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import Neticon from '../assets/Neticon.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Movies = ({ title, movieURL }) => {
  const [pick, setPick] = useState([]);
  const [movieHover, setMovieHover] = useState(false)
  const [titleHover, setTitleHover] = useState(false)

  
  useEffect(() => {
    axios.get(movieURL).then((response) => {
      setPick(response.data.results)
    });
  }, [])

  useEffect(() => {
    console.log(pick)
  }, [pick])
  var settings = {
   
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.25,
          slidesToScroll: 3.25,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.25,
          
        }
      }
    ]
  };
  return (
    <>
    <div> <div className='bg-black lg:pl-16'
    onMouseEnter={() => { setMovieHover(true) }}
    onMouseLeave={() => { setMovieHover(false) }}>
    <h1 className='text-white flex items-center  text-xl lg:text-3xl pt-5 lg:pt-16 pb-3 pl-5 lg:pl-0 font-bold '
      onMouseEnter={() => { setTitleHover(true) }}
      onMouseLeave={() => { setTitleHover(false) }}>{title}

      <div className='flex items-center gap-3  text-blue  ' >
        <h1 className={`${titleHover ? 'opacity-1  translate-x-4' : 'translate-x-0  opacity-0 '} lg:block md:block hidden duration-500  text-blue text-base font-bold`} >Explore All</h1>
        <MdOutlineKeyboardArrowRight size={30} className={`${movieHover ? 'opacity-1' : 'opacity-0'} hidden lg:block md:block duration-75`} /></div></h1>
    <div className="" >

    <Slider {...settings}>
   
    {pick.map((picks) => {
        return (
          <div>
          <div key={picks.id} className='mr-2  relative' >
            <img className={`rounded-sm ${title == "Only on Netflix" ? 'h-[251px] lg:h-[180px]' : 'h-[161px] lg:h-[180px]'} rounded-md  w-full object-fit`}
              src={`https://image.tmdb.org/t/p/w500/${picks.backdrop_path}`} alt={picks.title} />
            <div className={`absolute ${title == "Only on Netflix" ? 'flex lg:hidden' : 'hidden'} flex items-center bottom-8 p-7 text-white`}>
              <img src={Neticon} className='w-6 h-6 snap-start ' />
              <h2 className='font-bold tracking-widest text-xs'>SERIES</h2>
            </div>
            <div className={`h-[37px] w-full absolute  ${title == "Continue Watching for Sassy_leo" ? 'flex lg:hidden' : 'hidden'} justify-between items-center p-2 bg-[#121212] bottom-0 left-0`}>
              <AiOutlineInfoCircle size={24} className='text-gray' />
              <BiDotsVerticalRounded size={24} className='text-gray' />
            </div>
           
          </div>
          
          </div>
     
        )
      })
      }
   
    </Slider>
  
    
     
    
    </div>
  </div>
</div>
</>
  )}    

export default Movies