import React, { useContext, useState } from 'react'
import { ListContext } from '../context/StateProvider'

export default function ListItem({ item }) {
  const context = useContext(ListContext)
  const [listName, setListName] = useState(item.name)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = e => {
    setListName(e.target.value)
  }

  const handleUpdateList = () => {
    context.updateList(item.id, listName)
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setListName(item.name)
  }

  const handleDeleteLIst = () => {
    if(window.confirm(`Do you really want to delete ${item.name} list`)) {
      context.deleteList(item.id)
    }
  }

  return (
    <li
      onClick={() => context.selectList(item.id)}
      className={`list-container__item ${
        context.selectedListId === item.id ? 'selected' : ''
      }`}
    >
      {isEditing ? (
        <input type="text" value={listName} onChange={handleChange} />
      ) : (
        <span>{item.name}</span>
      )}
      <span className="list-container__actions">
        {isEditing ? (
          <>
            <button
              className="transparent-button"
              onClick={() => handleUpdateList()}
            >
              <span role="img" aria-label="edit">
                ✅
              </span>
            </button>
            <button
              className="transparent-button"
              onClick={() => handleCancelEdit()}
            >
              <span role="img" aria-label="cancel edit">
                ❌
              </span>
            </button>
            <button
              className="transparent-button"
              onClick={() => handleDeleteLIst()}
            >
              <span role="img" aria-label="delete list">
                🗑️
              </span>
            </button>
          </>
        ) : (
          <button
            className="transparent-button"
            onClick={() => setIsEditing(true)}
          >
            <span role="img" aria-label="edit">
              🖊️
            </span>
          </button>
        )}
      </span>
    </li>
  )
}
