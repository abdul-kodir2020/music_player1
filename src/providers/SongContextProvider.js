import React, { useEffect, useState } from 'react'
import SongsContext from '../contexts/SongsContext'
import axios from 'axios'

function SongContextProvider({children}) {
    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState({})

    useEffect(()=>{
        const getSongs = async()=>{

            const options = {
                method: 'GET',
                url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
                params: {q: 'damso'},
                headers: {
                    'X-RapidAPI-Key': '369777cb7fmsh356cc0724947926p145a91jsnf57f4af00b60',
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data.data);
                setSongs(response.data.data)
            } catch (error) {
                console.error(error);
}
        }
        getSongs()
        
    },[])

    const changeCurrentSong = (song) =>{
        setCurrentSong(song)
    }

  return (
    <SongsContext.Provider value={{songs, currentSong, changeCurrentSong}}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongContextProvider