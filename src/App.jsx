import "./App.css"
import FoodList from './components/FoodList'

function App() {

  return (
    <div className="App flex flex-col justify-center">
      <h1 className='text-5xl font-extrabold my-14'>LAB | React IronNutrition</h1>
      <FoodList />
    </div>
  )
}

export default App
