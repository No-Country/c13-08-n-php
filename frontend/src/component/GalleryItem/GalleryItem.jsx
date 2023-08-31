import React from 'react'

const GalleryItem = ({image}) => {
  return (
    <div>
        <img src={image} alt="pizza" />
    </div>
  )
}

export default GalleryItem