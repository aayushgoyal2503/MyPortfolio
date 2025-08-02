// src/components/Card/Card.jsx
import React from 'react'
import "./Card.css"
import mern from "../../assets/mern.png"
function Card({title,image,link}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
    <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="" />
        </div>
    </div>
    </a>
  )
}

export default Card