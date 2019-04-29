import React from 'react'

export default React.createContext({
  lists: {},
  todos: {},
  selectedListId: '',
  createList: name => {},
  selectList: id => {}
})
