import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import BodyContainer from './BodyContainer'

const HomePageContainer = () => {
  return (
    <div className="flex">
      <Sidebar />
      <BodyContainer />
    </div>
  )
}

export default HomePageContainer