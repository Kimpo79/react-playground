import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ items }) {
  return (
    <ul className="todo-list">
      {items && items.map((item, i) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
