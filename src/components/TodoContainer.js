import React, { useContext } from 'react'
import TodoList from './TodoList'
import { ListContext } from '../context/StateProvider'

export default function TodoContainer() {
  const context = useContext(ListContext)
  return (
    <>
      {context.selectedListId && (
        <div className="list-container content">
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
