import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='text-center m-5'><h1>Path Not Found </h1>
    <Link to="/">Please Login </Link>
    </div>
  )
}
