import noContentImg from '../assets/noContent.png'
import React from 'react'

function NoContent() {
  return (
    <div className='mt-8 mx-5 relative flex flex-col text-fuchsia-500 justify-center overflow-hidden'>
      <div className='w-full m-auto bg-white rounded-md shadow-md'>
        <h2 className='text-4xl font-bold m-4'>Oops! There is no more content to show.</h2>
        <div className='w-full m-auto'>
          <img className='mx-auto max-w-[150px]' src={noContentImg} />
        </div>
      </div>
    </div>

  )
}

export default NoContent