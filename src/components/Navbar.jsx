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
       <div className=" lg:block hidden text-white relative">
      <div className={` ${scroller ? 'bg-black' : 'bg-transparent'} duration-500 flex w-full z-[400] fixed 
      top-0 left-0 px-16 py-5  text-white items-center justify-between`}>
        <div className="flex  items-center gap-x-5">
          <img src={Vector} className="h-6 w-32 mr-6" />
          {netLinks.map((item, index) =>(
            <NavLink 
            to={item.url}
          >{item.name}</NavLink>
          ))}
         
        </div>
      
        <div className="flex items-center  gap-2">
          <FiSearch className='ml-4 cursor-pointer' size={25} />
          <p className='ml-4 cursor-pointer' >Kids</p>
          <HiOutlineBell className='ml-4 cursor-pointer' size={25} />
          <img src={addIcon} className='h- w-8 ml-4 cursor-pointer' />
        </div>
      </div>
    </div>
    <Outlet/>
    </>
   

  )
}

export default Navbar   