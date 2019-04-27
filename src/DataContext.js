import React, { useReducer, useEffect } from 'react'

const { Provider, Consumer: ContextConsumer } = React.createContext()

function todoReducer(state, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...state,
        {
          id: Date.now(),
          text: '',
          isCompleted: false
        }
      ]
    }
    case 'update': {
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      )
    }
    case 'delete': {
      return state.filter(item => item.id !== action.payload)
    }
    case 'completed': {
      return state.map(item =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    }
    case 'reset': {
      return action.payload
    }
    default:
      break
  }
}

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, [])

  useEffect(() => {
    const rawData = localStorage.getItem('todolist')
    dispatch({ type: 'reset', payload: JSON.parse(rawData) || [] })
  }, [])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(state))
  }, [state])

  return <Provider value={{ dispatch, state }}>{children}</Provider>
}

export { ContextConsumer, ContextProvider }
