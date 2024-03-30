import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import BodyContainer from './BodyContainer'

const HomePageContainer = () => {
  return (
    <Fragment>
      <Sidebar />
      <BodyContainer />
    </Fragment>
  )
}

export default HomePageContainer