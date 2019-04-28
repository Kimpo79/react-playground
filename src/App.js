import React from 'react'
import TodoContainer from './components/TodoContainer'
import ListContainer from './components/ListContainer'
import './App.css'
import StateProvider from './context/StateProvider'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main className="wrapper">
        <StateProvider>
          <ListContainer />
          <TodoContainer />
        </StateProvider>
      </main>
    </div>
  )
}
