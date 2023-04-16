import React from 'react'
import MenuCard from '../components/MenuCard'



export const Menu = () => {
   return (
    <div className='px-16 mt-12' >
      <div className=' w-2/5'>
      <h2 className='text-2xl'> Our menu</h2>
      <p>Lorem ispum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quia nostrud exercitatino ullamco.</p>
      </div>
      <div className='flex flex-row w-1/2 justify-between mt-8'>
        <p>ALL</p>
        <p>BREAKFAST</p>
        <p>DESSERTS</p>
        <p>DINNER</p>
        <p>BEVERAGE</p>
      </div> 
     <MenuCard  />
     
    </div>
    
  )
}
export default Menu
