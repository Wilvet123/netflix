import {React, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Rank1 from '../assets/Rank - 01.png'
import Rank2 from '../assets/Rank - 02.png'
import Rank3 from '../assets/Rank - 03.png'
import Rank4 from '../assets/Rank - 04.png'
import Rank5 from '../assets/Rank - 05.png'
import Rank6 from '../assets/Rank - 06.png'
import Rank7 from '../assets/Rank - 07.png'
import Rank8 from '../assets/Rank - 08.png'
import Rank9 from '../assets/Rank - 09.png'
import Rank0 from '../assets/Rank - 10.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


const ranks = [
  {
    top: 'https://images.pexels.com/photos/8647070/pexels-photo-8647070.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    rankNo:Rank1,
  },
  {
    top:'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank2,
  },
  {
    top:'https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank3,
  },
  {
    top:'https://images.pexels.com/photos/17404042/pexels-photo-17404042/free-photo-of-steps-to-old-gazebo-in-green-wild-forest.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    rankNo:Rank4,
  },
  {
    top:'https://images.pexels.com/photos/756570/pexels-photo-756570.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank5,
  },
  {
    top:'https://images.pexels.com/photos/8770954/pexels-photo-8770954.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank6,
  },
  {
    top:'https://images.pexels.com/photos/16956405/pexels-photo-16956405/free-photo-of-girl-in-a-pink-dress-posing-as-barbie.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank7,
  },
  {
    top:'https://images.pexels.com/photos/2240571/pexels-photo-2240571.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank8,
  },
  {
    top:'https://images.pexels.com/photos/9807582/pexels-photo-9807582.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank9,
  },
  {
    top:'https://images.pexels.com/photos/17897776/pexels-photo-17897776/free-photo-of-aqua-barbie-water-beach.jpeg?auto=compress&cs=tinysrgb&w=1600',
    rankNo:Rank0,
  },
]
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
        slidesToShow: 3.05,
        slidesToScroll: 3.05,
        infinite: true,
        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3
      }
    },
    {
      
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
    },
  ]
};

const Top10 = () => {
  const [movieHover, setMovieHover] = useState(false)
const [titleHover, setTitleHover] = useState(false)

  return (
    <div>
       <div className='bg-black  lg:pl-16'
    onMouseEnter={() => { setMovieHover(true) }}
    onMouseLeave={() => { setMovieHover(false) }}>
    <h1 className='text-white flex items-center sm:text-base  text-xl lg:text-3xl pt-5 lg:pt-16 pb-3 pl-5 lg:pl-0 font-bold '
      onMouseEnter={() => { setTitleHover(true) }}
      onMouseLeave={() => { setTitleHover(false) }}>Top 10 Movies in Nigeria Today

      <div className='flex items-center gap-3  text-blue  ' >
        <h1 className={`${titleHover ? 'opacity-1  translate-x-4' : 'translate-x-0  opacity-0 '} duration-500  text-blue text-base font-bold`} >Explore All</h1>
        <MdOutlineKeyboardArrowRight size={30} className={`${movieHover ? 'opacity-1' : 'opacity-0'} sm:hidden lg:block duration-75`} /></div></h1>
    <Slider {...settings} >
    {ranks.map((rank) => {
       return(
        
        <div className='flex  bg-black relative'>
        <img src={rank.rankNo} className='object-cover w-[180px] sm:w-[80px] sm:h-[170px] h-[205px] rounded-md'/>
        <div className='absolute  bottom-0 left-36 sm:left-20 top-0 '>
        <img src={rank.top} className='object-cover w-[180px] sm:h-[180px] h-[205px] rounded-md'/>
        </div>
        </div>
      
       )
      })}
    </Slider>
     
      
    </div>
    </div>
  )
}

export default Top10