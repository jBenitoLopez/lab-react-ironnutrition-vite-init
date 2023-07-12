import "./App.css"
import FoodBox from './components/FoodBox'
import foodsJson from "./foods.json"
import React, { useState } from 'react'

function App() {

  const [foods, setFoods] = useState([...foodsJson])

  console.log('foods :>> ', foods)
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {/* {
          foods.map((food)=><FoodBox food={food}/>)
        } */}
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }}
      />

    </div>
  )
}

export default App
