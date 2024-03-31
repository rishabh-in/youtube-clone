import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { toggelMenu } from '../../redux/slice/appSlice';

const Header = () => {
  const dispatch = useDispatch();

  const toggleSideBar = () => {
    dispatch(toggelMenu())
  }

  return (
    <div className="grid grid-flow-col p-3 shadow-lg">
      <div className='flex col-span-1 w-7/12 h-10 justify-between'>
        <img onClick={toggleSideBar} className='cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg' />
        <img className='cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' />
      </div>
      <div className='flex justify-center col-span-10' >
        <input type='text' className='border border-gray-400 border-r-0 p-1 w-5/12 rounded-l-full outline-none' />
        <button className='border border-gray-400 p-1 rounded-r-full'>Search</button>
      </div>
      <div className='flex col-span-1 h-10'>
        <img className='cursor-pointer' src='https://www.svgrepo.com/show/3130/user.svg' />
      </div>
    </div>
  )
}

export default Header