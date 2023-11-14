import React, { useContext } from 'react'
import SongsContext from '../contexts/SongsContext'
function OneSong(song) {
  const {changeCurrentSong, currentSong, setPlay} = useContext(SongsContext)

  return (
    <div className='one-music py-3 gap-4' onClick={()=>{changeCurrentSong(song.song); setPlay(true)}}>
        <img className='' alt='music' src={song.song.album?.cover_big}></img>
        <div>
            <h4 className={(currentSong.title === song.song.title)?'text-info':''}>{song.song.title}</h4>
            <h6 className=''>{song.song.artist.name}</h6>
        </div>
        <button className='btn border-0 ms-auto p-0'>
          {
            (currentSong.title === song.song.title)?
            <i className="fa-solid fa-chart-simple fa-beat text-info"></i>
            :<i className="fa-solid fa-circle-play"></i>
          }
        </button>
    </div>
  )
}

export default OneSong