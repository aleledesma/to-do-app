import { useState } from 'react'
import '../sass/components/Todo.scss'
import TodoEditMode from './TodoEditMode'

const Todo = ({ text, completed, id, onChangeCompleted, handleEditTodo, handleRemoveTodo }) => {
  const [editMode, setEditMode] = useState(false)

  function handleClick (event) {
    onChangeCompleted(id)
  }

  function handleDoubleClick (event) {
    setEditMode(true)
  }

  return (
    <li className='todo-box'>
      {
        editMode
          ? (<TodoEditMode text={text} id={id} handleEditTodo={handleEditTodo} setEditMode={setEditMode} />)
          : (
          <>
            <div className='todo'>
              <input className='todo-check' onClick={handleClick} type="checkbox" defaultChecked={completed} />
              <span onDoubleClick={handleDoubleClick} className={`todo-content ${completed && 'todo-completed'}`}>{text}</span>
            </div>
            <button onClick={() => { handleRemoveTodo(id) }} className='todo-remove'>x</button>
          </>
            )
      }
    </li>
  )
}

export default Todo
