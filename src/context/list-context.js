import React from 'react'

export default React.createContext({
  lists: {},
  selectedList: null,
  createList: name => {},
  selectList: id => {}
})
