import React, { useContext, useState } from 'react'
import { ListContext } from '../context/StateProvider'
import ListItem from './ListItem'

export default function ListContainer() {
  const context = useContext(ListContext)
  const [listName, setListName] = useState('')

  const handleChange = e => {
    setListName(e.target.value)
  }

  const handleCreateList = () => {
    context.createList(listName)
    setListName('')
  }

  const handleOnKeyDown = e => {
    if (e.key === 'Enter') {
      handleCreateList()
    }
  }

  return (
    <aside className="list-container sidebar">
      <ul className="list-container__list">
        <li className="list-container__item">
          <input
            type="text"
            className="list-container__name-input"
            value={listName}
            onKeyDown={handleOnKeyDown}
            onChange={handleChange}
            placeholder="Type your list name here..."
          />
          <button onClick={() => handleCreateList()}>Add List</button>
        </li>
        {Object.values(context.lists).map(list => (
          <ListItem key={list.id} item={list} />
        ))}
      </ul>
    </aside>
  )
}
