import React from 'react'
import notFound from '../../../Images/PageNotFound/404.png'
const PageNotFound = () => {
  return (
    <div className='container d-flex align-items-center justify-content-center' style={{minHeight: 'calc(100vh - 116px - 74px)'}}>
            <img className='w-50' src={notFound} alt="" />
    </div>
  )
}

export default PageNotFound