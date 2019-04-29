import React, { useContext } from 'react'
import ListContext from '../context/list-context'
import ListItem from './ListItem'

export default function ListContainer() {
  const context = useContext(ListContext)

  return (
    <aside className="list-container sidebar">
      <button onClick={() => context.createList('Give me a name')}>Create List</button>
      <ul className="list-container__list">
        {Object.keys(context.lists).map(key => (
          <ListItem key={key} item={context.lists[key]} />
        ))}
      </ul>
    </aside>
  )
}
