import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-48 shadow-xl p-5'>
      <div className='font-bold m-2'>
        <h1>Home</h1>
        <h1>Shorts</h1>
        <h1>Subscription</h1>
        <h1>Youtube Music</h1>
      </div>
      <div className='m-3'>
        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
          <li>Set India</li>
          <li>The Viral Fever</li>
          <li>T Series</li>
          <li>Carry Minati</li>
          <li>Mortal</li>
        </ul>
      </div>
      <div className='m-3'>
        <h1 className='font-bold'>More from YouTube</h1>
        <ul>
          <li>Youtube Studio</li>
          <li>Youtube Music</li>
          <li>Youtube Kids</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar