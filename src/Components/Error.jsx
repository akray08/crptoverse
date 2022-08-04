import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className='Error bg-dark text-warning'>
      <h1 className='display-1'>404</h1>
      <h1 className='my-3'>OOPS...Page not found</h1>
      <p className='my-3'>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
      <div>
      <Link to ="/main">Back to our site </Link>
      </div>
    </div>
  )
}

export default Error