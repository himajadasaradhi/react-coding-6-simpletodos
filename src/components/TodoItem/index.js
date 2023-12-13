// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteUser} = props
  const {title, id} = todoList
  const DeleteUser = () => {
    onDeleteUser(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={DeleteUser}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
