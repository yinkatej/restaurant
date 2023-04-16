import React from 'react'
import NavBar from '../components/NavBar'
import './main.css';

const Main = () => {
  return (
    <div className='px-16 bg-slate-950 pt-8  pb-72' >
       <div className="relative   flex flex-col h-[1031] top-0 left-0  ">
        <NavBar />
        <hr  className='mt-4 '/>
        <div className='flex flex-row justify-stretch mt-12'>
            <div className='text-white mr-4 items-start mt-16 w-2/5' >
              <h2 className='text-6xl font-light leading-normal'> Quality food, and locally sourced produced by seasons </h2>
              <p className='mt-8'>
                Our menu features a wide variety of dishes to satisfy every taste bud. From appetizers to entrees, our dishes are made with the freshest ingredients and prepared with care by our experienced chefs.
              </p>
              <div className='flex flex-row pt-4 ' >
                <button className='btn ' >ONLINE ORDER</button>
                <button className='btn'>BOOK A TABLE</button>
              </div>
            </div>
            <div className='image flex flex-row '>
              <img src={require('../images/main/keriliwi-v_JswZL-s3k-unsplash 1.png')} alt='keriliwi-v' className='relative ml-8 left-12' />
              <img src={require('../images/main/jonathan-borba-Kosh4ZkWqas-unsplash 1.png')} 
              alt='jonathan-borba-Kosh4ZkWqas-unsplash'
              className='relative top-44 -left-16'
              />
            </div>

        </div >
        </div>
    </div>
   
  )
}

export default Main