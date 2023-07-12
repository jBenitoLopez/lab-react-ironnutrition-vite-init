import React from 'react'

function FoodBox({food}) {

  const {id, name, calories, image, servings} = food

  return (
    <div key={id}>
      <h2 className='text-3xl font-bold m-6'>{name}</h2>

      <img className='mx-auto' src={image} />

      <p className='text-lg mt-4'>Calories: {calories}</p>
      <p className='text-lg mt-2'>Servings {servings}</p>

      <p className='mt-4'>
        <b>Total Calories: {servings * calories}</b> kcal
      </p>

      <button className='text-2xl font-bold mt-4'>Delete</button>
    </div>
  )
}

export default FoodBox
