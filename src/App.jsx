import { useState } from 'react'
import './App.css'
import Mp3Card from './components/Mp3Card'
import Cover from './assets/music_cover.jpg';
import Source from './assets/follow_god_by_Kanye_West.mp3';

function App() {
  
  const obj = {
    album_name : "Follow God",
    music_cover: Cover,
    Sing_by: "Kanye",
    music_src : Source,
  }

  return (
      <div>
        <Mp3Card {...obj}/>
      </div>
  )
}

export default App
