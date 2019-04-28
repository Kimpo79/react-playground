import React from 'react'
import ListContext from '../context/list-context'

export default function ListItem({ item }) {
  return (
    <ListContext.Consumer>
      {context => (
        <li onClick={() => context.selectList(item.id)} className={`list-container__item ${context.selectedList.id === item.id ? 'selected' : ''}` }>
          <span>{item.name}</span>
        </li>
      )}
    </ListContext.Consumer>
  )
}
