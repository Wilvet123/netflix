import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineWallet } from 'react-icons/ai'
import { GoHomeFill } from 'react-icons/go'
import { useSelector } from 'react-redux'

const Footer = () => {
   const icon = useSelector((state) => state.net.userIcon)
   return (
      <div>
         <div className='bg-black flex lg:hidden md:hidden sm:hidden justify-between text-xs
         px-9 items-center text-center py-5 text-gray  w-full bottom-o left-0  '>
            <div className='text-center'>
               <GoHomeFill size={28} />
               <h1>Home</h1>
            </div>

            <div className='flex flex-col items-center'>
               <AiOutlineWallet size={28} />
               <h1>New & Hot</h1>
            </div>
            <div className='flex flex-col items-center'>
               <img src={icon} className='h- w-7' />
               <h1>My Profile</h1>
            </div>
         </div>
         <div className='bg-black lg:block md:block sm:block hidden w-full pl-[480px] py-32 '>
            <div className='text-white flex gap-7 px-3 py-8'>
               <FaFacebookF size={25} />
               <BsInstagram size={25} />
               <AiFillYoutube size={25} />
            </div>



            <div className='lg:flex hidden  flex-wrap text-gray  mb-11 items-center  gap-32 '>
               <div className='flex flex-shrink-0 footer  flex-col gap-4'>
                  <a>Audio Description</a>
                  <a>Investor Relations</a>
                  <a>Legal Notices</a>

               </div>
               <div className='flex flex-shrink-0 footer  flex-col gap-4'>
                  <a>Help Center</a>
                  <a>Jobs</a>
                  <a>Cookie Preferences</a>
               </div>
               <div className='flex flex-shrink-0 footer  flex-col gap-4'>
                  <a>Gift Cards</a>
                  <a>Terms of Use</a>
                  <a>Corporate Information</a>
               </div>
               <div className='flex flex-shrink-0 flex-col  gap-4'>
                  <a>Media Center</a>
                  <a>Privacy</a>
                  <a>Contact Us</a>
               </div>

            </div>
            <a className='border border-gray-600 lg:inline-block hidden hover:text-white text-gray mt-16 py-2 px-2'>Service Code</a>
         </div>
      </div>

   )
}

export default Footer