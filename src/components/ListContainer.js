import React, {useContext} from 'react'
import ListContext from '../context/list-context'
import ListItem from './ListItem'

const listStyles = {}
const containerStyles = {
  backgroundColor: '#efefef',
  margin: '0 0 0 10px',
  padding: '20px',
  minHeight: '80vh'
}

export default function ListContainer() {
  const context = useContext(ListContext)
  
  return (
    <div style={containerStyles}>
      <button onClick={() => context.createList('HELLOOO')}>Create List</button>
      <ul style={listStyles}>
      {Object.keys(context.lists).map(key => (
        <ListItem key={key} item={context.lists[key]} />
      ))}
    </ul>
    </div>
  )
}
