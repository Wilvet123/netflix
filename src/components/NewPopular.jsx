import React, { useState } from 'react'
import video2 from '../assets/video2.mp4'
import { FaPlay } from 'react-icons/fa'
import { BsPlusLg, BsDot, BsHandThumbsUp, BsHandThumbsDown } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const NewPopular = () => {
    const [isShown, setShown] = useState(false)
    const [like, setLike] = useState(false)
    const [love, setLove] = useState(false)
    const [notLike, setNotLike] = useState(false)
    const [isPlus, setPlus] = useState(false)
    const [isThumb, setThumb] = useState(false)

    return (
        <div className='h-[430px] w-[480px]  mx-24 rounded-xl cursor-pointer bg-black my-24 relative'>

            <video autoPlay muted className='absolute top-0 rounded-t-xl w left-0'>
                <source src={video2} type='video/mp4' />
            </video>


            <div className=' absolute top-[65%] left-6 right-6 flex   justify-between '>
                <div className='text-white flex gap-3  '>
                    <div className='p-2  bg-white text-center text-black border border-white rounded-full'
                    >
                        <FaPlay size={28} />
                    </div>


                    <div
                        onMouseEnter={() => setPlus(true)}
                        onMouseLeave={() => setPlus(false)}
                        className='p-2   text-center relative border-[3px] border-gray hover:border-white rounded-full'>
                        <BsPlusLg size={28} />
                        {isPlus && (<div className='triangle  rounded-lg bg-white  absolute py-3 top-[-80px] max-w-[500px] left-[-180%] right-[-180%]'>
                            <h1 className='text-xl font-bold text-black'>Remove from list</h1>
                        </div>)}
                    </div>

                    <div >
                        <div onMouseEnter={() => setThumb(true)}
                            onMouseLeave={() => setThumb(false)}
                            className='p-2   text-center relative border-[3px] border-gray hover:border-white rounded-full'>
                            <BsHandThumbsUp size={28} />
                        </div>
                        <div className={`bg-gray w-48 absolute top-[-10px] bottom-[-10px] left-[-160%] 
                        ${isThumb ? 'opacity-1' : 'opacity-0'} duration-500  flex items-center justify-center 
                        gap-4 rounded-full   text-white `}>
                            <div onMouseEnter={() => setNotLike(true)}
                                onMouseLeave={() => setNotLike(false)}
                                className='p-2 text-center relative text-white rounded-full hover:bg-black'>
                                <BsHandThumbsDown size={28} />
                                {notLike && (<div className='triangle  rounded-lg bg-white  absolute py-3 top-[-80px] left-[-100%] right-[-100%]'>
                                    <h1 className='text-xl font-bold text-black'>Not For Me</h1>
                                </div>)}
                            </div>
                            <div onMouseEnter={() => setLike(true)}
                                onMouseLeave={() => setLike(false)}
                                className='p-2 text-center relative text-white rounded-full hover:bg-black'>
                                <BsHandThumbsUp size={28} />
                                {like && (<div className='triangle  rounded-lg bg-white  absolute py-3 top-[-80px] left-[-100%] right-[-100%]'>
                                    <h1 className='text-xl font-bold text-black'>I like this</h1>
                                </div>)}
                            </div>

                            <div onMouseEnter={() => setLove(true)}
                                onMouseLeave={() => setLove(false)}
                                className='p-2 text-center relative text-white rounded-full hover:bg-black'>
                                <BsHandThumbsUp size={28} />
                                {love && (<div className='triangle  rounded-lg bg-white  absolute py-3 top-[-80px] left-[-100%] right-[-100%]'>
                                    <h1 className='text-xl font-bold text-black'>Love this!</h1>
                                </div>)}
                            </div>

                        </div>
                    </div>

                </div>
                <div onMouseEnter={() => setShown(true)}
                    onMouseLeave={() => setShown(false)}
                    className='p-2   text-white relative text-center border-[3px] border-gray hover:border-white rounded-full'>
                    <MdOutlineKeyboardArrowDown size={28} />
                    {isShown && (<div className='triangle  rounded-lg bg-white  absolute py-3 top-[-80px] left-[-100%] right-[-100%]'>
                        <h1 className='text-xl font-bold text-black'>More Info</h1>
                    </div>)}
                </div>
            </div>
            <div className='left-6 flex items-center absolute bottom-12'>
                <div className='border text-lg border-gray py-0 px-2 text-gray'>
                    <p>16+</p>
                </div>
                <p className='text-gray ml-3 text-lg'>1h 47m</p>
            </div>
            <div className='flex  items-center left-6 absolute bottom-0 text-white'>
                <p>Emotional</p>
                <BsDot size={30} className='text-gray' />
                <p>Romantic</p>
                <BsDot size={30} className='text-gray' />
                <p>Comedy</p>
            </div>



        
        </div>
    )
}

export default NewPopular