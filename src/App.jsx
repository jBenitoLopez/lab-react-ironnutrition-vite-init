import "./App.css"
import FoodBox from './components/FoodBox'
import foodsJson from "./foods.json"
import React, { useState } from 'react'

function App() {

  const [foods, setFoods] = useState([...foodsJson])

  const handleDeleteItem = (id) => {
    const newList = foods.filter((food)=>food.id !== id);
    setFoods(newList);
  }

  console.log('foods :>> ', foods)
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {
        foods.map((food) => <FoodBox key={food.id} food={food} handleDelete={handleDeleteItem} />)
      }


    </div>
  )
}

export default App
