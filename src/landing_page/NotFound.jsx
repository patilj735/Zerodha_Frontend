import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container p-5 mb-5 ">
        <div className="row text-center">
          <h1 className='mb-5'>
         404 Page not found!!
          </h1>
          <p>
         Sorry, the page you are looking for does not exist.
          </p>
          <button 
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{width:"25%",margin:"0 auto"}}
            onClick={() => navigate('/')}
          >
            Go Home
          </button>
        </div>
      </div>
  )
}

export default NotFound
