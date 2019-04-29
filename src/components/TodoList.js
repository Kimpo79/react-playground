import React, { useContext, useState } from 'react'
import TodoItem from './TodoItem'
import { ListContext } from '../context/StateProvider'

export default function TodoList({ items }) {
  const context = useContext(ListContext)
  const [todoText, setTodoText] = useState('')

  const handleChange = e => {
    setTodoText(e.target.value)
  }

  const handleCreateTodo = () => {
    context.createTodo(todoText)
    setTodoText('')
  }

  const handleOnKeyDown = e => {
    if (e.key === 'Enter') {
      handleCreateTodo()
    }
  }

  return (
    <ul className="todo-list">
      <li className="todo-list-item">
        <input
          value={todoText}
          onKeyDown={handleOnKeyDown}
          onChange={handleChange}
          className="todo-list-item__text"
          placeholder="Write down your todo here..."
          type="text"
        />
        <button onClick={() => handleCreateTodo()}>Add Todo</button>
      </li>
      {items && items.map((item, i) => <TodoItem key={item.id} item={item} />)}
    </ul>
  )
}
