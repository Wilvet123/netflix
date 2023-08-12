import React, {useState, useEffect } from 'react'
import axios from 'axios';

const Api = () => {
   const [select, setSelect] = useState([])
useEffect(() => {
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
        headers: {
          'X-RapidAPI-Key': 'bc67532a8dmshdab15b86ff117a2p141756jsn9134326fccc8',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
    async function fetchMovies() {
          const response = await axios.request(options);
          console.log(response.data.results);
          setSelect(response.data.results)
      }fetchMovies()
},[])

  return (
    <div>
        {select.map(( selects) =>{
            return(
                <div>
      {selects.originalTitleText.text}
      {selects.releaseDate.day}
        
      </div>
            )
    })
    }
    </div>
  )
}

export default Api