import React, { useContext } from 'react'
import TodoList from './TodoList'
import ListContext from '../context/list-context'

export default function TodoContainer() {
  const context = useContext(ListContext)

  return (
    <>
      {context.selectedList && context.selectedList.items && (
        <div className="list-container content">
          <button onClick={() => context.createTodo()}>Add Todo</button>
          <TodoList items={context.selectedList.items} />
        </div>
      )}
    </>
  )
}
