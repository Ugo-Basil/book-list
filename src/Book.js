import React from 'react'
import './App.css';
import './book.css'




export default function Book(props) {
    const { img, title, author} = props
    
    //attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler =() => {
        alert('Hello world')
    } 
    return (
        <article className='book'>
            <img src={img} alt="" /> 
            <h2>{title}</h2>
            <h3>{author }</h3>
           
            <button type='button' onClick={clickHandler}>Buy now</button>
        </article>
  )
}




 







