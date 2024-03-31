import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = (props) => {
  const item = props.item.snippet;
  let thumbnails = item.thumbnails;
  return (
    <Link to={"/watch?v=" + props.item.id} className='m-5 w-[calc(25%-40px)]'>
      <div className='p-2 w-full h-full shadow-xl cursor-pointer'>
        <img className='rounded-lg w-full' alt='img' src={thumbnails.medium.url}/>
        <ul className='mt-1'>
          <li className='font-bold py-2'>{item.title}</li>
          <li>{item.channelTitle}</li>
        </ul>
      </div>
    </Link>


    )
}

export default VideoCard