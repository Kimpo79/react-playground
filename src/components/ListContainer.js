import React, { useContext } from 'react'
import ListContext from '../context/list-context'
import ListItem from './ListItem'

export default function ListContainer() {
  const context = useContext(ListContext)

  return (
    <aside className="list-container sidebar">
      <button onClick={() => context.createList('HELLOOO')}>Create List</button>
      <ul>
        {Object.keys(context.lists).map(key => (
          <ListItem key={key} item={context.lists[key]} />
        ))}
      </ul>
    </aside>
  )
}
