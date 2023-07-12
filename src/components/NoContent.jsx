import noContentImg from '../assets/noContent.png'
import React from 'react'

function NoContent() {
  return (
    <div className='mt-5'>
      <h1 >Oops! There is no more content to show.</h1>
      <img src={noContentImg} style={{filter: 'invert(1)'}} />
    </div>
  )
}

export default NoContent