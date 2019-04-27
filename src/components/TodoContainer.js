import React from 'react'
import TodoList from './TodoList'
import { ContextConsumer } from '../DataContext'

export default function TodoContainer() {
  return (
    <ContextConsumer>
      {({ state, dispatch }) => (
        <div>
          <button onClick={() => dispatch({ type: 'add' })}>Add Todo</button>
          <TodoList items={state} />
        </div>
      )}
    </ContextConsumer>
  )
}
