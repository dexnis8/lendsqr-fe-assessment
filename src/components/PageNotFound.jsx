import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const Navigate = useNavigate()
  return (
    <div className='error-page'>
        <h1>Opps! this page isn't available</h1>
        <button onClick={()=> Navigate('/dashboard') }>
           Back to Dashboard
        </button>
    </div>
  )
}

export default PageNotFound