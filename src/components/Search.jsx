function Search({ handlerFilter }) {
  return (
    <div className='mt-5 relative flex flex-col text-fuchsia-700 justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-fuchsia-100 rounded-md shadow-md lg:max-w-xl'>
        <h2 className='text-4xl font-bold mb-6'>Filter Food</h2>

        <div className="">
          <input type="text" className="w-full input input-bordered input-primary text-fuchsia-200" onChange={(e) => handlerFilter(e.target.value)} />
        </div>

      </div>
    </div>
  )
}

export default Search

