import uuid from '../utils/uuid'

export const CREATE_LIST = 'CREATE_LIST'
export const SELECT_LIST = 'SELECT_LIST'
export const DELETE_LIST = 'DELETE_LIST'
export const UPDATE_TODO = 'UPDATE_TODO'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TODO_COMPLETED = 'TODO_COMPLETED'
export const INITIALIZE_STATE = 'INITIALIZE_STATE'

export function listReducer(state, action) {
  switch (action.type) {
    case CREATE_LIST: {
      return createList(state, action)
    }
    case SELECT_LIST: {
      return selectList(state, action.payload.id)
    }
    case DELETE_LIST: {
      return deleteList(state, action)
    }
    case CREATE_TODO: {
      return createTodo(state, action)
    }
    case UPDATE_TODO: {
      return updateTodo(state, action)
    }
    case DELETE_TODO: {
      return deleteTodo(state, action)
    }
    case TODO_COMPLETED: {
      return todoCompleted(state, action)
    }
    case INITIALIZE_STATE: {
      return initializeState(state, action)
    }
    default:
      break
  }
}

const createList = (state, action) => {
  const id = uuid()
  return {
    ...state,
    lists: {
      ...state.lists,
      [id]: {
        id: id,
        name: action.payload.name,
        items: []
      }
    }
  }
}

const selectList = (state, listId) => {
  return {
    ...state,
    lists: {
      ...state.lists,
      [state.selectedList.id]: state.selectedList
    },
    selectedList: state.lists[listId]
  }
}

const deleteList = (state, action) => {
  delete state.lists[action.payload.id]
  return {
    ...state
  }
}

const createTodo = (state, action) => {
  return {
    ...state,
    selectedList: {
      ...state.selectedList,
      items: [
        ...state.selectedList.items,
        {
          id: uuid(),
          text: action.payload,
          isCompleted: false
        }
      ]
    }
  }
}

const updateTodo = (state, action) => {
  return {
    ...state,
    selectedList: {
      ...state.selectedList,
      items: [
        ...state.selectedList.items.map(item =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        )
      ]
    }
  }
}

const deleteTodo = (state, action) => {
  return {
    ...state,
    selectedList: {
      ...state.selectedList,
      items: [
        ...state.selectedList.items.filter(
          item => item.id !== action.payload.id
        )
      ]
    }
  }
}

const todoCompleted = (state, action) => {
  return {
    ...state,
    selectedList: {
      ...state.selectedList,
      items: [
        ...state.selectedList.items.map(item =>
          item.id === action.payload.id
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        )
      ]
    }
  }
}

const initializeState = (state, action) => {
  return { ...action.payload }
}
