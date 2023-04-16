import React from 'react'


const MenuCard = ({props}) => {
 console.log(props)
 
  
  return (
    
    <div className='w-1/3 '>
      <img src={ props.image} alt= {` for ${props.name}` } height='200px' width='140px' />
      <div><h2>{props.name}</h2> 
          { }{props.rating}
          </div>
        <p>{props.text}</p>
        <h4>{`${props.price}`} </h4>
    </div>
  )
}

export default MenuCard