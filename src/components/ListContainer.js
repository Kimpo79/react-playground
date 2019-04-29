import React, { useContext } from 'react'
import { ListContext } from '../context/StateProvider'
import ListItem from './ListItem'

export default function ListContainer() {
  const context = useContext(ListContext)

  return (
    <aside className="list-container sidebar">
      <ul className="list-container__list">
        <li className="list-container__item">
          <input type="text" />
          <button onClick={() => context.createList('Give me a name')}>
            Add List
          </button>
        </li>
        {Object.values(context.lists).map(list => (
          <ListItem key={list.id} item={list} />
        ))}
      </ul>
    </aside>
  )
}
