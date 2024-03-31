import React from 'react'
import Button from '../Common/Button'

const BodyBtnList = () => {

  const buttonList = [
    "All",
    "Music",
    "Naruto",
    "Gaming",
    "Mixes",
    "Dramedy",
    "Thrillers",
    "T-Series",
    "Sitcoms",
    "Virat Kohli",
    "Recently uploaded",
    "Watched",
    "New to you"
]
  return (
    <div className='flex'>
      {buttonList && buttonList.map((val, index) => (
        <Button key={index} name={val}/>
      ))}
    </div>
  )
}

export default BodyBtnList