import '../sass/components/TodoContainer.scss'

const TodoContainer = ({ children }) => {
  return (
    <div className='todo-container'>
      {children}
    </div>
  )
}

export default TodoContainer
