import { useState } from 'react'
import '../sass/components/TodoEditMode.scss'

const TodoEditMode = ({ text, id, handleEditTodo, setEditMode }) => {
  const [buffer, setBuffer] = useState(text)

  function handleChange (event) {
    setBuffer(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (buffer.trim() === '') return
    handleEditTodo(id, buffer)
    setEditMode(false)
  }

  return (
    <form onSubmit={handleSubmit} className='todo-edit-form'>
      <button className='todo-edit-button'>
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="#a6a6a6" viewBox="0 0 256 256"><path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path></svg>
      </button>
      <input onChange={handleChange} className="todo-edit-input" type="text" value={buffer} autoFocus />
    </form>
  )
}

export default TodoEditMode
