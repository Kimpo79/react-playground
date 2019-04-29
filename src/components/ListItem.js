import React from 'react'
import { ListContext } from '../context/StateProvider'

export default function ListItem({ item }) {
  return (
    <ListContext.Consumer>
      {context => (
        <li
          onClick={() => context.selectList(item.id)}
          className={`list-container__item ${
            context.selectedListId === item.id ? 'selected' : ''
          }`}
        >
          <span>{item.name}</span>
          <span className="list-container__actions">
            <button
              className="transparent-button"
              onClick={() => context.editList(item.id)}
            >
              <span role="img" aria-label="edit">
                🖊️
              </span>
            </button>
            <button
              className="transparent-button"
              onClick={() => context.deleteList(item.id)}
            >
              <span role="img" aria-label="delete">
                ❌
              </span>
            </button>
          </span>
        </li>
      )}
    </ListContext.Consumer>
  )
}
