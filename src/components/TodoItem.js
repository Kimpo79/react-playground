import React from 'react'
import { ContextConsumer } from '../DataContext'
import debounce from '../utils/debouncer'

const todoItemStyles = {
  display: 'flex',
  width: '200px',
  margin: '5px auto'
}

export default function TodoItem({ item }) {
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
            onChange={({ target: { value } }) => {
              debounce(
                () =>
                  dispatch({
                    type: 'update',
                    payload: { id: item.id, text: value }
                  }),
                item.id,
                300
              )
            }}
          />
          <button onClick={() => dispatch({ type: 'delete', payload: id })}>
            X
          </button>
        </li>
      )}
    </ContextConsumer>
  )
}
