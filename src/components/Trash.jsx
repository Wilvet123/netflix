import React from 'react'

const Trash = () => {
  return (
    <div>
     <div className='bg-black lg:pl-16'
    onMouseEnter={() => { setMovieHover(true) }}
    onMouseLeave={() => { setMovieHover(false) }}>
    <h1 className='text-white flex items-center  text-xl lg:text-3xl pt-5 lg:pt-16 pb-3 pl-5 lg:pl-0 font-bold '
      onMouseEnter={() => { setTitleHover(true) }}
      onMouseLeave={() => { setTitleHover(false) }}>{title}

      <div className='flex items-center gap-3  text-blue  ' >
        <h1 className={`${titleHover ? 'opacity-1  translate-x-4' : 'translate-x-0  opacity-0 '} duration-500  text-blue text-base font-bold`} >Explore All</h1>
        <MdOutlineKeyboardArrowRight size={30} className={`${movieHover ? 'opacity-1' : 'opacity-0'} duration-75`} /></div></h1>
    <div className={`${title == "Only on Netflix" ? 'only' : 'scroller'} pl-4 `} >

    
    {pick.map((picks) => {
        return (
          <div key={picks.id} className='mr-2  scroll-smooth snap-x snap-mandatory snap-start relative' >
            <img className={`rounded-sm ${title == "Only on Netflix" ? 'h-[251px] lg:h-[180px]' : 'h-[161px] lg:h-[180px]'}  w-full object-fit`}
              src={`https://image.tmdb.org/t/p/w500/${picks.backdrop_path}`} alt={picks.title} />
            <div className={`absolute ${title == "Only on Netflix" ? 'flex lg:hidden' : 'hidden'} flex items-center bottom-8    p-7 text-white`}>
              <img src={Neticon} className='w-6 h-6 snap-start ' />
              <h2 className='font-bold tracking-widest text-xs'>SERIES</h2>
            </div>
            <div className={`h-[37px] w-full absolute  ${title == "Continue Watching for Sassy_leo" ? 'flex lg:hidden' : 'hidden'} justify-between items-center p-2 bg-[#121212] bottom-0 left-0`}>
              <AiOutlineInfoCircle size={24} className='text-gray-400' />
              <BiDotsVerticalRounded size={24} className='text-gray-400' />
            </div>
          </div>
        )
      })
      }
    
     
    
    </div>
  </div>
  <div className='absolute top-[100%] left-0'>
      <Movies title="Popular on Netflix" movieURL={requests.popular} />
      <Movies title="Trending Now" movieURL={requests.trending} />
      <Movies title="Continue Watching for Sassy_leo" movieURL={requests.topRated} />
      <Movies title="Only on Netflix" movieURL={requests.upcoming} />
      <Footer/>
      </div>  </div>
    
  )
}

export default Trash