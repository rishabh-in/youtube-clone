import React from 'react'
import { useGetVideosQuery } from '../../apiSlice'
import VideoCard from './VideoCard';

const VideoCardContainer = () => {
  const {data, isLoading, error} = useGetVideosQuery();

  if(isLoading) {
    return <div>Loading</div>
  }
  return (
    <div className='flex flex-wrap w-full'>
      {data && data.items.map((i) => (
        <VideoCard key={i.id} item={i}/>
      ))}
    </div>
  )
}

export default VideoCardContainer