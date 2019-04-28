import React from 'react'
import TodoItem from './TodoItem'

const todoListStyle = {

}

export default function TodoList({ items }) {
  return (
    <ul style={todoListStyle}>
      {items && items.map((item, i) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
