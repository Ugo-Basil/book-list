import React from 'react'
import './App.css';
import './book.css'

export default function Book(props) {
const {img, title, author, job, children} = props
    return (
        <article className='book'>
            <img src={img} alt="" /> 
            <h2>{title}</h2>
            <h3>{author}</h3>  
            {children}
            <p>{job}</p>
        </article>
  )
}




 







