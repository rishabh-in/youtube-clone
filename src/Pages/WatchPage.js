import React from 'react'
import PlayerContainer from '../Components/VideoPage/PlayerContainer'
import Sidebar from '../Components/HomePage/Sidebar'

const WatchPage = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <PlayerContainer />
    </div>
  )
}

export default WatchPage