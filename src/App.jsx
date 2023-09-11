import { useState } from 'react'
import { Route, Routes, Router } from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'  
import Movie from './components/Movie'
import Movies from './components/Movies'
import requests from './components/request'
import MyList from './components/MyList'
import TVShows from './components/TVShows'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PopUp from './components/PopUp'
import Categories from './components/Categories'
import NewPopular from './components/NewPopular'



function App() {
  

  return (
    <div className='overflow-hidden w-full bg-black '>  
     
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/browse" >
        <Route index element={<Home/>}  />
          <Route path="mylist" element={<MyList />} />
          <Route path="genre/83" element={<TVShows />} />
          <Route path="genre/34399" element={<Movies />} />
          <Route path="latest" element={<NewPopular />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
     
      
      
    
    
    </div>
  )
}

export default App
