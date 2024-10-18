import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onDeleteTodo, toggleCompleted }) => {
  return (
    <div>
        {todos.map((todo) => (
            <Todo key={todo._id} id={todo._id} title={todo.title} completed={todo.completed} onDeleteTodo={onDeleteTodo} toggleCompleted={toggleCompleted} />
        ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])).isRequired
};

export default TodoList;