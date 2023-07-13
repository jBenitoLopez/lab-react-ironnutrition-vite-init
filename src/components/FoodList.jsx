import foodsJson from "../foods.json"
import React, { useState } from 'react'
import AddFoodForm from './AddFoodForm'
import FoodBox from './FoodBox'
import Search from './Search'
import NoContent from './NoContent'

function FoodList() {
  const [foods, setFoods] = useState([...foodsJson])
  const [foodsFiltered, setFoodsFiltered] = useState([...foods])

  const updateFoodsData = (foodsData) => {
    setFoods(foodsData)
    setFoodsFiltered(foodsData)
  }
  const handleDeleteItem = (id) => {
    const foodsData = foods.filter((food) => food.id !== id)
    updateFoodsData(foodsData)
  }

  const handleInsertFood = (food) => {
    const foodsData = [food, ...foods]
    updateFoodsData(foodsData)
  }

  const handlerFilterFoods = (searchInput) => {
    setFoodsFiltered([...foods])

    if (searchInput.length > 1) {
      const filteredData = foods.filter((food) => {
        return Object.values(food)
          .join('').toLowerCase()
          .includes(searchInput.toLowerCase())
      })
      setFoodsFiltered(filteredData)
    }

  }

  return (
    <>
      <AddFoodForm handleInsert={handleInsertFood} />
      <Search handlerFilter={handlerFilterFoods} />

      <div className='mt-8 mx-5 relative flex flex-col text-sky-400/100 justify-center overflow-hidden'>
        <div className='w-full m-auto bg-white rounded-md shadow-md'>
          <h2 className='text-4xl font-bold m-4'>List of Foods</h2>
        </div>
      </div>

      <div>
        <h2 className='text-4xl font-bold mt-16 mb-8'></h2>
        <div className='flex flex-wrap justify-evenly'>
          {
            foodsFiltered.length > 0
              ? foodsFiltered.map((food) => <FoodBox
                key={food.id}
                food={food}
                handleDelete={handleDeleteItem}
              />)
              : <NoContent />
          }
        </div>
      </div>
    </>
  )
}

export default FoodList