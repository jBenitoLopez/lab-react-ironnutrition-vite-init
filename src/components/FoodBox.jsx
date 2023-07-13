import React from 'react'

function FoodBox({ food, handleDelete }) {

  const { id, name, calories, image, servings } = food

  return (
    <div className="card w-80 glass m-4">
      <figure><img className='object-fill h-48 w-96' src={image} alt={name}/></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Calories: {calories}</p>
        <p>Servings {servings}</p>
        <p><b>Total Calories: {servings * calories}</b> kcal</p>
        <div className="card-actions justify-end">
          <button className="">Buy Now</button>
          <button className='btn btn-primary' onClick={() => handleDelete(id)}>Delete</button>

        </div>
      </div>
    </div>


  )
}

export default FoodBox
