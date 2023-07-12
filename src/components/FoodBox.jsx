import React from 'react'

function FoodBox({food, handleDelete}) {

  const {id, name, calories, image, servings} = food

  return (
    <div className='m-5'>
      <h2 className='text-3xl font-bold m-6'>{name}</h2>

      <img className='mx-auto object-cover h-48' src={image} />

      <p className='text-lg mt-4'>Calories: {calories}</p>
      <p className='text-lg mt-2'>Servings {servings}</p>

      <p className='mt-4'>
        <b>Total Calories: {servings * calories}</b> kcal
      </p>

      <button className='text-2xl font-bold mt-4' onClick={() => handleDelete(id)}>Delete</button>
      <hr className='m-5'/>
    </div>
  )
}

export default FoodBox
