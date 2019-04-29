import React from 'react'
import TodoContainer from './components/TodoContainer'
import ListContainer from './components/ListContainer'
import './styles/App.css'
import './styles/components.css'
import StateProvider from './context/StateProvider'
import ProgressiveBgImage from './components/ProgressiveBgImage'

export default function App() {
  return (
    <ProgressiveBgImage
      lqImage="/wooden-bg-blurred.jpg"
      hqImage="/wooden-bg.jpg"
    >
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
    </ProgressiveBgImage>
  )
}
