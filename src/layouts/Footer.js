import React from 'react'
import {AiFillYoutube, AiOutlineWhatsApp, AiFillFacebook,AiFillGoogleCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-black text-white pt-20 px-16 flex flex-row  pb-16'>
      <div className='w-2/5 pr-48'>
        <img src={require('../images/main/logo.png')} alt='logo' className='mb-16' />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
        <div className='flex flex-row mt-8 w-2/5 justify-between'>
          <AiFillYoutube />
          <AiOutlineWhatsApp />
          <AiFillFacebook />
          <AiFillGoogleCircle />
        </div>
      </div>
      <div className='w-1/5'>
        <h2>PAGES</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h2>CONTACT</h2>
        <email>hridoycraft@gmail.com</email>
        <p>08162191239</p>
      </div>
    </div>
  )
}

export default Footer