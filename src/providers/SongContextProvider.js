import React, { useEffect, useState } from 'react'
import SongsContext from '../contexts/SongsContext'
import axios from 'axios'

function SongContextProvider({children}) {
    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState({})
    const [play, setPlay] = useState(true)

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

    const pauseOrPlay = () =>{
        const audio = document.querySelector('audio')

        
        if (play) {
            audio.pause()
            setPlay(false)
        } else {
            audio.play()
            setPlay(true)
        }
    }

    const goForward = () => {
        const indexOfCurrentSong = songs.indexOf(currentSong)

        let nextSong = null
        if (indexOfCurrentSong + 1 === songs.length) {
            nextSong = songs[0]
        }else{
            nextSong = songs[indexOfCurrentSong + 1]
        }
        
        setCurrentSong(nextSong)
        setPlay(true)

    }

    const goBackward = () => {
        const indexOfCurrentSong = songs.indexOf(currentSong)

        let previousSong = null
        if (indexOfCurrentSong === 0) {
            previousSong = songs[songs.length - 1]
        }else{
            previousSong = songs[indexOfCurrentSong - 1]
        }
        
        setCurrentSong(previousSong)
        setPlay(true)

    }

  return (
    <SongsContext.Provider value={{songs, currentSong, changeCurrentSong, play, setPlay, pauseOrPlay, goForward, goBackward}}>
        {children}
    </SongsContext.Provider>
  )
}

export default SongContextProvider