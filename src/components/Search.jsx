function Search({ handlerFilter }) {
  return (
    <div>
      <h2 className='text-3xl font-bold m-6'>Filter Food</h2>
      <div className="form-control">
        <label className="input-group">
          <input type="text" className="input input-bordered w-96" onChange={(e) => handlerFilter(e.target.value)} />
        </label>
      </div>

    </div>
  )
}

export default Search