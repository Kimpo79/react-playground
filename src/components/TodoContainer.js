import React, { useContext } from 'react'
import TodoList from './TodoList'
import ListContext from '../context/list-context'

const containerStyles = {
  backgroundColor: '#efefef',
  margin: '0 0 0 10px',
  padding: '20px',
  minHeight: '80vh'
}

export default function TodoContainer() {
  const context = useContext(ListContext)

  return (
    <>
      {context.selectedList && context.selectedList.items && (
        <div style={containerStyles}>
          <button onClick={() => context.createTodo()}>Add Todo</button>
          <TodoList items={context.selectedList.items} />
        </div>
      )}
    </>
  )
}
