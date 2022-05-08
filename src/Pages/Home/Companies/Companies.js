import React from 'react'
import company1 from '../../../Images/Company/1.jpg'
import company2 from '../../../Images/Company/2.jpg'
import company3 from '../../../Images/Company/3.jpg'
import company4 from '../../../Images/Company/4.jpg'
import company5 from '../../../Images/Company/5.jpg'
const Companies = () => {
    const companies = [company1,company2,company3,company4,company5];
  return (
    <div className='container py-5'>
        <h1 className=' mt-5 secondery-text fw-bold text-center'>TOP COMPANYS</h1>
        <h3 className='primary-text fw-bold text-center'>WHO BELEIVES IN US</h3>
        <hr />
        <div className='row row-cols-1 g-2 row-cols-lg-5'>
        {
            companies.map((company,i)=> <div key={i} className='col d-flex justify-content-center align-items-center'><img className='w-50' src={company}></img></div>)
        }
        </div>
        <hr />
    </div>
  )
}

export default Companies