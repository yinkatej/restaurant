import React from 'react'
import {FcSearch} from 'react-icons/fc';
import {FaUserAlt} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {AiFillShopping} from 'react-icons/ai';


const NavBar = () => {
  return (
    <div className='flex flex-row justify-between ' >

      <div >
        <img src={require('../images/main/logo.png')} alt='logo' />
      </div>

      <div className='flex flex-row space-x-32 '>
        <div className='flex flex-row space-x-10 text-right font-normal text-white' >
          <h5>HOME</h5>
          <h5>ABOUT US</h5>
          <h5>MENU</h5>
          <h5>FAQs</h5>        
        </div>

        <IconContext.Provider value={{ size: 30, className: 'text-slate-500 hover:text-blue-600 cursor-pointer ml-16'}}>
        <div className='flex flex-row items-end '>
        
        <FcSearch />
        <AiFillShopping />
        <FaUserAlt />
        </div>
        </IconContext.Provider>
        </div> 
      
    </div>
  )
}

export default NavBar