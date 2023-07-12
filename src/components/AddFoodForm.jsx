import React, { useState } from 'react'

const foodInit = {
  'id': '',
  'name': '',
  'calories': '',
  'image': '',
  'servings': ''
}

function AddFoodForm({handleInsert}) {

  const [food, setFood] = useState({ ...foodInit })
  const {name,calories,image,servings} = food;

  return (
    <div className='mt-5'>
      <h2 className='text-3xl font-bold m-6'>Add New Food</h2>
      <form className='form'>

        <div className="form-control">
          <label className="input-group">
            <span>Name</span>
            <input type="text" className="input input-bordered" onChange={(e) => setFood({...food, name:e.target.value})} value={name} />
          </label>
        </div>

        <div className="form-control">
          <label className="input-group">
            <span>Image</span>
            <input type="text" className="input input-bordered" onChange={(e) => setFood({...food, image:e.target.value})} value={image} />
          </label>
        </div>

        <div className="form-control">
          <label className="input-group">
            <span>Calories</span>
            <input type="number" className="input input-bordered" onChange={(e) => setFood({...food, calories:e.target.value})} value={calories} />
          </label>
        </div>

        <div className="form-control">
          <label className="input-group">
            <span>Servings</span>
            <input type="number" className="input input-bordered" onChange={(e) => setFood({...food, servings:e.target.value})} value={servings} />
          </label>
        </div>

        <button className="btn btn-primary" onClick={(e) => {e.preventDefault(); return handleInsert({...food, id:new Date().toString()})}}>Add Food</button>

      </form>
    </div>
  )
}

export default AddFoodForm