import React, { useState } from 'react'

function Search() {
  const  [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    
    console.log('value :>> ', value);
  }
  return (
    <div>
        <div className="form-control">
          <label className="input-group">
            <input type="text" className="input input-bordered w-96" onChange={handleChange} value={query} />
          </label>
        </div>

    </div>
  )
}

export default Search