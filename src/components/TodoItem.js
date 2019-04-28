import React, { useContext } from 'react'
import ListContext from '../context/list-context'
import debounce from '../utils/debouncer'

const todoItemStyles = {
  display: 'flex',
  margin: '5px auto'
}

export default function TodoItem({ item }) {
  const { id, isCompleted, text } = item
  const context = useContext(ListContext)

  return (
    <li style={todoItemStyles}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => context.completeTodo(id)}
      />
      <input
        type="text"
        defaultValue={text}
        placeholder="Start typing..."
        onChange={({ target: { value } }) => {
          debounce(() => context.updateTodo(item.id, value), item.id, 300)
        }}
      />
      <button onClick={() => context.deleteTodo(id)}>X</button>
    </li>
  )
}
