import { useState } from 'react'
import '../sass/components/TodoInput.scss'

const TodoInput = ({ onAddTodo }) => {
  const [buffer, setBuffer] = useState('')

  function handleChange (event) {
    setBuffer(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (buffer.trim() === '') return
    onAddTodo({
      text: buffer,
      completed: false,
      id: crypto.randomUUID()
    })
    setBuffer('')
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input className='todo-input' onChange={handleChange} type="text" value={buffer} placeholder="What needs to be done?" />
    </form>
  )
}

export default TodoInput
