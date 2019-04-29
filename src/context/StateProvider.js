import React, { useReducer, useEffect } from 'react'
import {
  listReducer,
  CREATE_LIST,
  SELECT_LIST,
  DELETE_LIST,
  UPDATE_TODO,
  CREATE_TODO,
  DELETE_TODO,
  TODO_COMPLETED,
  INITIALIZE_STATE
} from './reducers'
import ListContext from './list-context'

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, {
    lists: {},
    todos: {},
    selectedListId: ''
  })

  const createList = name => {
    dispatch({ type: CREATE_LIST, payload: { name: name } })
  }

  const deleteList = id => {
    dispatch({ type: DELETE_LIST, payload: { id: id } })
  }

  const selectList = id => {
    dispatch({ type: SELECT_LIST, payload: { id: id } })
  }

  const createTodo = () => {
    dispatch({ type: CREATE_TODO })
  }

  const updateTodo = (id, text) => {
    dispatch({ type: UPDATE_TODO, payload: { id, text } })
  }

  const deleteTodo = id => {
    dispatch({ type: DELETE_TODO, payload: { id: id } })
  }

  const completeTodo = id => {
    dispatch({ type: TODO_COMPLETED, payload: { id: id } })
  }

  useEffect(() => {
    const rawData = localStorage.getItem('todolist')
    if (rawData) {
      dispatch({ type: INITIALIZE_STATE, payload: JSON.parse(rawData) })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(state))
  }, [state])

  return (
    <ListContext.Provider
      value={{
        lists: state.lists,
        todos: state.todos,
        selectedListId: state.selectedListId,
        createList: createList,
        selectList: selectList,
        deleteList: deleteList,
        createTodo: createTodo,
        updateTodo: updateTodo,
        deleteTodo: deleteTodo,
        completeTodo: completeTodo
      }}
    >
      {children}
    </ListContext.Provider>
  )
}

export default StateProvider
