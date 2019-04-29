import React, { useContext } from 'react'
import TodoList from './TodoList'
import ListContext from '../context/list-context'

export default function TodoContainer() {
  const context = useContext(ListContext)
  console.log('TODO CONTAINER: ', context)
  return (
    <>
      {context.selectedListId && (
        <div className="list-container content">
          <button onClick={() => context.createTodo()}>Add Todo</button>
          <TodoList
            items={Object.values(context.todos).filter(
              todoItem => todoItem.listId === context.selectedListId
            )}
          />
        </div>
      )}
    </>
  )
}
