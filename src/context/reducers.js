import uuid from '../utils/uuid'

export const CREATE_LIST = 'CREATE_LIST'
export const SELECT_LIST = 'SELECT_LIST'
export const DELETE_LIST = 'DELETE_LIST'
export const UPDATE_LIST = 'UPDATE_LIST'
export const UPDATE_TODO = 'UPDATE_TODO'
export const CREATE_TODO = 'CREATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const INITIALIZE_STATE = 'INITIALIZE_STATE'

export function listReducer(state, action) {
  if (!actionHandlers[action.type]) {
    console.log('No handler for action type: ', action.type)
    return {...state}
  }
  return actionHandlers[action.type](state, action)
}

const actionHandlers = {
  [CREATE_LIST](state, action) {
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
  },

  [SELECT_LIST](state, action) {
    return {
      ...state,
      selectedListId: action.payload.id
    }
  },

  [DELETE_LIST](state, action) {
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
  },

  [UPDATE_LIST](state, action) {
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
  },

  [CREATE_TODO](state, action) {
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
  },

  [UPDATE_TODO](state, action) {
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
  },

  [DELETE_TODO](state, action) {
    delete state.todos[action.payload.id]
    return {
      ...state
    }
  },

  [COMPLETE_TODO](state, action) {
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
  },

  [INITIALIZE_STATE](state, action) {
    return { ...state, ...action.payload }
  }
}
