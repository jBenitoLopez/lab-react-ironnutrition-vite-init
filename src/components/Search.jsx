function Search({ handlerFilter }) {
  return (
    <div>
      <h2 className='text-4xl font-bold mt-16 mb-8'>Filter Food</h2>
      <div className="form-control">
        <label className="input-group">
          <input type="text" className="input input-bordered w-96" onChange={(e) => handlerFilter(e.target.value)} />
        </label>
      </div>

    </div>
  )
}

export default Search