import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price}) => {
    const[readMore, setReadMore] = useState(true)
  return (
  <article className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>{price}</h4>
        </div>
        <p>{readMore? info : `${info.substring(0, 250)}...`}</p>
        <button></button>
        <button className='delete-btn'>not interested</button>
      </footer>
  </article>
    
  )
  
};

export default Tour;