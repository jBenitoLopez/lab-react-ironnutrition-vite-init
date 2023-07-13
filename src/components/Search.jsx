function Search({ handlerFilter }) {
  return (
    <div className='mt-5 relative flex flex-col text-sky-400/100 justify-center overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
        <h2 className='text-4xl font-bold mb-6'>Filter Food</h2>

        <div className="">
          <input type="text" className="w-full input input-bordered input-primary" onChange={(e) => handlerFilter(e.target.value)} />
        </div>

      </div>
    </div>
  )
}

export default Search

