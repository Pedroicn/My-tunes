import React, { useState } from 'react'

function Home() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = ({ target: { value } }) => {
    setSearchInput(value);
  };

  return (
    <div>
      <h1 className="search-title">My tunes</h1>
      <form className="search-form">
        <h3>Search for your favorite artist album</h3>
        <div>
          <input
            placeholder="type an artist name"
            id="search-input"
            name="search-input"
            type="text"
            value={ searchInput }
            onChange={ handleSearch }
          />
        </div>
        <button
          className="search-button"
          type="submit"
        >
          Search
        </button>

      </form>
    </div>
  )
}

export default Home