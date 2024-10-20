import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo, toggleCompleted, onEditedTodo }) => {
  return (
    <div className='d-flex flex-column' >
        {todos.map((todo) => (
            <Todo key={todo._id} id={todo._id} title={todo.title} completed={todo.completed} onDeleteTodo={onDeleteTodo} toggleCompleted={toggleCompleted} onEditedTodo={onEditedTodo} />
        ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])).isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onEditedTodo: PropTypes.func.isRequired
};

export default TodoList;