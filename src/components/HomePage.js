import React, { useContext } from 'react'
import OneSong from './OneSong'
import SongsContext from '../contexts/SongsContext'
import SongPlayer from './SongPlayer'

function HomePage() {
    const {songs, currentSong} = useContext(SongsContext)

  return (
    <div className='home position-relative'>
        <section className='top-section p-3'>
            <h1 className='m-0'>Nom de la classe</h1>
            <p className='m-0 '>My playlist &nbsp;&nbsp;¤&nbsp;&nbsp; 240 songs &nbsp;&nbsp;¤&nbsp;&nbsp; 32 hours </p>
        </section>
        <section className='bottom-section p-3 pt-4'>
            <button className='shuffle rounded shadow p-2'><i class="fa-solid fa-shuffle"></i>&nbsp;&nbsp; Aléatoire</button>
            <div className='liste-music pt-3 pb-5'>
                {
                  songs?.map((song)=>(
                    <OneSong key={song.id} song={song}></OneSong>
                  ))
                }
            </div>
        </section>
        
        <audio className='d-none' src={currentSong?.preview} controls autoPlay/>
        {
          Object.keys(currentSong).length !== 0 && <SongPlayer></SongPlayer>
        }
        
    </div>
  )
}

export default HomePage