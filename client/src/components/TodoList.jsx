import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div>
        {todos.map((todo) => (
            <Todo key={todo._id} title={todo.title} completed={todo.completed} />
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