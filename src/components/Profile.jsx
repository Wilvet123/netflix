import React, { useId, useState } from 'react'
import Netflix from "../assets/Vector.png"
import Pencil from "../assets/Pencil.png"
import Rectangle2 from "../assets/Rectangle 2.png"
import Rectangle3 from "../assets/Rectangle 3.png"
import Rectangle4 from "../assets/Rectangle 4.png"
import Rectangle5 from "../assets/Rectangle 5.png"
import Group1 from "../assets/Group 1.png"
import Home from './Home'
import { setUserIcon, setUsername } from '../store/netSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const users = [
  {
    Name: "Emenalo",
    icon: Rectangle2
  },
  {
    Name: "Onyeka",
    icon: Rectangle3
  },
  {
    Name: "Thelma",
    icon: Rectangle4
  },
  {
    Name: "Kids",
    icon: Rectangle5
  },
]

const Profile = () => {
  const dispatch = useDispatch()


  return (
    <div>
      <div className='flex  lg:justify-center items-center flex-col bg-black h-screen px-16 '>
        <div className=''>
          <h1 className='font-bold text-2xl lg:text-7xl text-white'>Who's Watching?</h1>
        </div>

        <div className='grid items-center justify-center grid-cols-2  lg:grid-cols-5 lg:pt-16 pt-32 gap-x-10 gap-y-8'>
          {users.map((user) => {
            return (
              <Link to='/browse' key={user.id} onClick={() => {
                dispatch(setUsername(user.Name))
                dispatch(setUserIcon(user.icon))
              }} className='cursor-pointer group '>
                <img src={user.icon} className='lg:h-48 group-hover:border-4 group-hover:rounded-lg group-hover:border-white lg:w-48' />
                <p className='text-center pt-1 lg:pt-3 lg:text-3xl group-hover:lg:text-white lg:text-gray text-white'>{user.Name}</p>
              </Link>
            )
          })
          }
        </div>
        <div>
          <button className='px-8 py-3 mt-36 border border-gray text-gray hover:text-white hover:border-white text-2xl hidden lg:block'>Manage Profiles</button>
        </div>
      </div>
      
    </div>


  )
}

export default Profile