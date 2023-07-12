import foodsJson from "../foods.json"
import React, { useState } from 'react'
import AddFoodForm from './AddFoodForm'
import FoodBox from './FoodBox'
import Search from './Search'

function FoodList() {
  const [foods, setFoods] = useState([...foodsJson])

  const handleDeleteItem = (id) => {
    const newList = foods.filter((food) => food.id !== id)
    setFoods(newList)
  }

  const handleInsertFood = (food) => {
    const newList = [food, ...foods]
    setFoods(newList)
  }

  const handlerFilterFoods = (query) => {
    setInterval(() => {
      const newList = foods.filter((food) => food.name.includes(query))
      setFoods()
    }, 400);
    
  }

  return (
    <div>
      <h2 className='text-3xl font-bold m-6'>Search</h2>
      <Search handlerFilter={handlerFilterFoods} />
      <h2 className='text-3xl font-bold m-6'>Food List</h2>
      <AddFoodForm handleInsert={handleInsertFood} />
      {
        foods.map((food) => <FoodBox key={food.id} food={food} handleDelete={handleDeleteItem} />)
      }
    </div>
  )
}

export default FoodList