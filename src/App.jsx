import "./App.css"
import AddFoodForm from './components/AddFoodForm'
import FoodBox from './components/FoodBox'
import foodsJson from "./foods.json"
import React, { useState } from 'react'

function App() {

  const [foods, setFoods] = useState([...foodsJson])

  const handleDeleteItem = (id) => {
    const newList = foods.filter((food)=>food.id !== id);
    setFoods(newList);
  }

  const handleInsertFood = (food) => {
    const newList = [...foods, food]
    setFoods(newList);
  }

  return (
    <div className="App">
      <AddFoodForm  handleInsert={handleInsertFood} />
      <h1>LAB | React IronNutrition</h1>
      {
        foods.map((food) => <FoodBox key={food.id} food={food} handleDelete={handleDeleteItem} />)
      }


    </div>
  )
}

export default App
