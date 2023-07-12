import foodsJson from "../foods.json"
import React, { useState } from 'react'
import AddFoodForm from './AddFoodForm'
import FoodBox from './FoodBox'

function FoodList() {
  const [foods, setFoods] = useState([...foodsJson])

  const handleDeleteItem = (id) => {
    const newList = foods.filter((food) => food.id !== id)
    setFoods(newList)
  }

  const handleInsertFood = (food) => {
    const newList = [...foods, food]
    setFoods(newList)
  }

  return (
    <div>
      <AddFoodForm handleInsert={handleInsertFood} />
      {
        foods.map((food) => <FoodBox key={food.id} food={food} handleDelete={handleDeleteItem} />)
      }
    </div>
  )
}

export default FoodList