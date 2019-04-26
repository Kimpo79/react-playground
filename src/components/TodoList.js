import React from 'react'
import TodoItem from './TodoItem'

const todoListStyle = {
  maxWidth: '600px',
  backgroundColor: '#efefef',
  margin: '0 auto',
  padding: '10px',
  minHeight: '60vh'
}

const TodoList = ({ items }) => {
  return (
    <ul style={todoListStyle}>
      {items && items.map((item, i) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default TodoList
