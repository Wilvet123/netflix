import { useState } from 'react'
import { Route, Routes, Router } from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'  
import Movie from './components/Movie'
import Movies from './components/Movie'
import requests from './components/request'
import MyList from './components/MyList'
import TVShows from './components/TVShows'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopUp from './components/PopUp'
import Categories from './components/Categories'
import NewPopular from './components/Top10'
import Top10 from './components/Top10'


function App() {
  

  return (
    <div className='overflow-hidden  '>  
   
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/browse" element={<Navbar/>}>
        <Route index element={<Home/>}  />
          <Route path="mylist" element={<MyList />} />
          <Route path="genre/83" element={<TVShows />} />
          <Route path="genre/34399" element={<Movies />} />
          <Route path="latest" element={<NewPopular />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <div className="absolute  top-[20%] lg:top-[80%] left-0 right-0">
      <Movie title="Top Rated" movieURL={requests.trending} />
      </div>
      <div className='absolute top-[40%] bg-black lg:top-[105%] left-0 right-0'>
      <Movie title="Continue Watching for Sassy_leo" movieURL={requests.topRated} />
      <Movie title="Popular on Netflix" movieURL={requests.popular} />
      <Top10/>
      <Movie title="Only on Netflix" movieURL={requests.upcoming} />
      <PopUp/>
      <Footer/>
      </div>
      
      
    
    
    </div>
  )
}

export default App
