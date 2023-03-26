import TodoTitle from './components/TodoTitle'
import TodoInput from './components/TodoInput'
import ListofTodos from './components/ListofTodos'
import { useState } from 'react'
import './sass/components/App.scss'
import TodoContainer from './components/TodoContainer'
import Footer from './components/Footer'
import { FILTERS } from './consts'

function App () {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState(FILTERS.ALL)

  const activesTodos = todos.filter(todo => !todo.completed).length

  function handleAddTodo (todo) {
    setTodos([...todos, todo])
  }

  function handleChangeCompleted (id) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, completed: !todo.completed }
      return todo
    })
    setTodos(newTodos)
  }

  function handleEditTodo (id, newText) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, text: newText }
      return todo
    })
    setTodos(newTodos)
  }

  function handleRemoveTodo (id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  function handleFilterSelect (filter) {
    console.log(filter)
    setFilter(filter)
  }

  function handleRemoveCompleted () {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === FILTERS.ACTIVES) return !todo.completed
    if (filter === FILTERS.COMPLETED) return todo.completed
    return true
  })

  return (
    <main className='main-container'>
      <TodoTitle text='todos' />
      <TodoContainer>
        <TodoInput onAddTodo={handleAddTodo} />
        <ListofTodos todosList={filteredTodos} onChangeCompleted={handleChangeCompleted} handleEditTodo={handleEditTodo} handleRemoveTodo={handleRemoveTodo} />
        <Footer activesTodos={activesTodos} filterSelected={filter} handleFilterSelect={handleFilterSelect} handleRemoveCompleted={handleRemoveCompleted} />
      </TodoContainer>
    </main>
  )
}

export default App
