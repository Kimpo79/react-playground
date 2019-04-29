import uuid from '../utils/uuid'

export const CREATE_LIST = 'CREATE_LIST'
export const SELECT_LIST = 'SELECT_LIST'
export const DELETE_LIST = 'DELETE_LIST'
export const UPDATE_LIST = 'UPDATE_LIST'
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
    case UPDATE_LIST: {
      return updateList(state, action)
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
        name: action.payload.name
      }
    },
    selectedListId: id
  }
}

const selectList = (state, listId) => {
  return {
    ...state,
    selectedListId: listId
  }
}

const deleteList = (state, action) => {
  delete state.lists[action.payload.id]
  return {
    ...state,
    todos: Object.keys(state.todos)
      .filter(key => state.todos[key].listId !== action.payload.id)
      .reduce((acc, curr) => {
        acc[curr] = state.todos[curr]
        return acc
      }, {})
  }
}

const updateList = (state, action) => {
  return {
    ...state,
    lists: {
      ...state.lists,
      [action.payload.id]: {
        ...state.lists[action.payload.id],
        name: action.payload.name
      }
    }
  }
}

const createTodo = (state, action) => {
  const id = uuid()
  return {
    ...state,
    todos: {
      [id]: {
        id: id,
        text: action.payload.text,
        isCompleted: false,
        listId: state.selectedListId
      },
      ...state.todos
    }
  }
}

const updateTodo = (state, action) => {
  return {
    ...state,
    todos: {
      ...state.todos,
      [action.payload.id]: {
        ...state.todos[action.payload.id],
        text: action.payload.text
      }
    }
  }
}

const deleteTodo = (state, action) => {
  delete state.todos[action.payload.id]
  return {
    ...state
  }
}

const todoCompleted = (state, action) => {
  return {
    ...state,
    todos: {
      ...state.todos,
      [action.payload.id]: {
        ...state.todos[action.payload.id],
        isCompleted: !state.todos[action.payload.id].isCompleted
      }
    }
  }
}

const initializeState = (state, action) => {
  return { ...action.payload }
}
