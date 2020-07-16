import React from 'react'

const Table = ({ list, onDismiss }) => {
  return (
    <div className="table">
      {list.map((item) => (
        <div key={item.objectID} className="table-row">
          <span style={{ width: '40%' }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: '30%' }}>{item.author}</span>
          <span style={{ width: '10%' }}>{item.num_comments}</span>
          <span style={{ width: '10%' }}>{item.points}</span>
          <span>
            <button onClick={() => onDismiss(item.objectID)} type="button">
              Dismiss
            </button>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Table
