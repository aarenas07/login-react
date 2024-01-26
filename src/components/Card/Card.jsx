import React from 'react'
import "./Card.css"

export const Card = ({ nombre, precio, imagen }) => {
  return (
    <div className="card">
      <div>
        <img src={imagen} alt="image_shoe" />
      </div>
    <div className="card__content">
      <p className="card__title">{nombre}</p>
      
      <p className="card__title">{`$ ${precio}`}</p>

    </div>
  </div>

  )
}
