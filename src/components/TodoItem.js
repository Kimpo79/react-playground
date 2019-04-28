import React, { useContext } from 'react'
import ListContext from '../context/list-context'
import debounce from '../utils/debouncer'


export default function TodoItem({ item }) {
  const { id, isCompleted, text } = item
  const context = useContext(ListContext)

  return (
    <li className="todo-list-item">
      <input
        type="checkbox"
        className="todo-list-item__checkbox"
        checked={isCompleted}
        onChange={() => context.completeTodo(id)}
      />
      <input
        type="text"
        defaultValue={text}
        className="todo-list-item__text"
        placeholder="Start typing..."
        onChange={({ target: { value } }) => {
          debounce(() => context.updateTodo(item.id, value), item.id, 300)
        }}
      />
      <button className="todo-list-item__button" onClick={() => context.deleteTodo(id)}>
        <span role="img" aria-label="delete">❌</span>
      </button>
    </li>
  )
}
