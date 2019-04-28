import React from 'react'
import ListContext from '../context/list-context'

const listItemStyles = {
  margin: '5px auto',
  cursor: 'pointer'
}

export default function ListItem({ item }) {
  return (
    <ListContext.Consumer>
      {context => (
        <li onClick={() => context.selectList(item.id)} style={listItemStyles}>
          <p>{item.name}</p>
        </li>
      )}
    </ListContext.Consumer>
  )
}
