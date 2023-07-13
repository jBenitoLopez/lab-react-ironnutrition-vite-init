import React, { useState } from 'react'

const foodInit = {
  'id': '',
  'name': '',
  'calories': '',
  'image': '',
  'servings': ''
}

function AddFoodForm({ handleInsert }) {

  const [food, setFood] = useState({ ...foodInit })
  const { name, calories, image, servings } = food

  return (
    <div className='relative flex flex-col text-sky-400/100 justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
        <h2 className='text-4xl font-bold mb-6'>Add New Food</h2>
        <div className='form space-y-4'>
          <div className="">
            <label className="label input-group">
              <span>Name</span>
              <input type="text" className="w-full input input-bordered input-primary" onChange={(e) => setFood({ ...food, name: e.target.value })} value={name} />
            </label>
          </div>

          <div className="">
            <label className="label input-group">
              <span>Image</span>
              <input type="text" className="w-full input input-bordered input-primary" onChange={(e) => setFood({ ...food, image: e.target.value })} value={image} />
            </label>
          </div>

          <div className="">
            <label className="label input-group">
              <span>Calories</span>
              <input type="number" className="w-full input input-bordered input-primary" onChange={(e) => setFood({ ...food, calories: e.target.value })} value={calories} />
            </label>
          </div>

          <div className="">
            <label className="label input-group">
              <span>Servings</span>
              <input type="number" className="w-full input input-bordered input-primary" onChange={(e) => setFood({ ...food, servings: e.target.value })} value={servings} />
            </label>
          </div>

          <div className='mt-3'>
            <button className="btn btn-block btn-secondary" onClick={(e) => { return handleInsert({ ...food, id: new Date().toString() }) }}>Add Food</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddFoodForm