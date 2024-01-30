
import React from 'react'
import WelcomBanner from './_components/WelcomBanner'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
      {/* Left Container */}
      <div className='col-span-2'>
        <WelcomBanner/>
      </div>
      {/* Right Container */}
      <div className=''>
      Right Section
      </div>
    </div>
  )
}

export default Courses