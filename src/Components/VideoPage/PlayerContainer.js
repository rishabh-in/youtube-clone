import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../../redux/slice/appSlice';

const PlayerContainer = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  
  return (
    <div className='m-2'>
      <iframe 
        width="1200" 
        height="650" 
        src={"https://www.youtube.com/embed/" + id} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default PlayerContainer