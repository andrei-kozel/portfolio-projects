import React from 'react'

const Search = ({ onChange, value, onSubmit, children }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} />
        <button type="submit">{children}</button>
      </form>
    </div>
  )
}

export default Search
