import Todo from './Todo'
import '../sass/components/ListofTodos.scss'

const ListofTodos = ({ todosList, onChangeCompleted, handleEditTodo, handleRemoveTodo }) => {
  return (
    <ul className='list-of-todos'>
      {todosList.map(todo => (
        <Todo key={todo.id} text={todo.text} completed={todo.completed} id={todo.id} onChangeCompleted={onChangeCompleted} handleEditTodo={handleEditTodo} handleRemoveTodo={handleRemoveTodo} />
      ))}
    </ul>
  )
}

export default ListofTodos
