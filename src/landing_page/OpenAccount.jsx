import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpenAccount = () => {
  const navigate = useNavigate();

  return (
     <div className="container p-5 mb-5 ">
        <div className="row text-center">
          <h1 className='mb-5'>
         Open a Zerodha account
          </h1>
          <p>
         Mopdern platform and apps, <i className="fa fa-inr" aria-hidden="true"></i> 0 investments,and flat <i className="fa fa-inr" aria-hidden="true"></i> 20 intraday and F&O trading.
          </p>
          <button 
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{width:"25%",margin:"0 auto"}}
            >
            <a 
                    className="nav-link active" 
                    href={`${import.meta.env.VITE_FRONTEND_URL}/signup`}
                    style={{ color: "#e4ecf5ff", fontWeight: "500" }}
                  >
                      Signup Now
                  </a>
          
          </button>
        </div>
      </div>
  )
}

export default OpenAccount
