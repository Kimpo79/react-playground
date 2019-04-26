import React from 'react'
import TodoContainer from './components/TodoContainer'
import './App.css'
import { ContextProvider } from './DataContext'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main>
        <ContextProvider>
          <TodoContainer />
        </ContextProvider>
      </main>
    </div>
  )
}

export default App
