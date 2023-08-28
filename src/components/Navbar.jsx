import { NavLink, Outlet } from "react-router-dom"
import Vector from "../assets/Vector.png"
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineBell } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import Video1 from '../assets/video1.mp4'
import Plus from "../assets/plus.png"
import Play from "../assets/Play.png"
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Neticon from '../assets/Neticon.png'
import {RiArrowDownSFill} from 'react-icons/ri'
import Movies from "./Movies"

const netLinks = [
  {
    name: 'Home',
    url: '/browse'
  },
  {
    name: 'TV Shows',
    url: '/browse/genre/83'
  },
  {
    name: 'Movies',
    url: '/browse/genre/34399'
  },
  {
    name: 'New & Popular',
    url: '/browse/latest'
  },
  {
    name: 'My List',
    url: '/browse/mylist'
  },

]

const Navbar = () => {
  const [scroller, setScroller] = useState(false)

  const useScroll = () => {
    if (window.scrollY > 0) {
      setScroller(true)
    }
    else {
      setScroller(false)
    }
  }
  window.addEventListener('scroll', useScroll)
  const addIcon = useSelector((state) => state.net.userIcon)
  return (
    <>
       <div className=" lg:block sm:block text-white relative">
      <div className={` ${scroller ? 'bg-black' : 'bg-transparent'}  duration-500 flex w-full z-[400] fixed 
      top-0 left-0 lg:px-16 sm:px-5 lg:py-5 sm:py-3 text-white items-center justify-between`}>
        <div className="flex  items-center sm:gap-x-0 lg:gap-x-5">
          <img src={Vector} className="lg:h-6 lg:w-32 sm:h-4 sm:w-[70px] mr-6" />
          <h1 className="text-xs lg:hidden">Browse</h1>
          <RiArrowDownSFill size={20}  className='lg:hidden block'/>
          {netLinks.map((item, index) =>(
            <NavLink 
            to={item.url}  className= {({ isActive}) =>
    isActive ? "font-bold lg:block md:hidden sm:hidden" : " hover:text-gray duration-300 lg:block md:hidden sm:hidden"
  }
          >{item.name}</NavLink>
          ))}
         
        </div>
      
        <div className="flex items-center sm:gap-1  gap-2">
          <FiSearch className='ml-4 cursor-pointer md:block sm:hidden' size={25} />
          <p className='ml-4 cursor-pointer sm:hidden' >Kids</p>
          <HiOutlineBell className='ml-4  cursor-pointer' size={25} />
          <img src={addIcon} className='h- w-8 ml-4 cursor-pointer' />
        </div>
      </div>
    </div>
    <Outlet/>
    </>
   

  )
}

export default Navbar   