import React from 'react'
import { ContextConsumer } from '../DataContext'

const todoItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '200px',
  margin: '5px auto'
}

const TodoItem = ({ item }) => {
  const { id, isCompleted, text } = item
  return (
    <ContextConsumer>
      {({ dispatch }) => (
        <li style={todoItemStyles}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => dispatch({ type: 'completed', payload: id })}
          />
          <input
            type="text"
            defaultValue={text}
            placeholder="Start typing..."
            onChange={(e) =>
              dispatch({
                type: 'update',
                payload: { id: item.id, text: e.target.value }
              })
            }
          />
          <button onClick={() => dispatch({ type: 'delete', payload: id })}>
            X
          </button>
        </li>
      )}
    </ContextConsumer>
  )
}

export default TodoItem
