import { useState } from 'react';
import PropTypes from 'prop-types';

const Todo = ({ id, title, completed, onDeleteTodo, toggleCompleted}) => {
    const [ completedState, setCompletedState ] = useState(completed);

    const handleDelete = (event) => {
        event.preventDefault();
        onDeleteTodo(id);
    }

    return (
        <div >
            <input
                type="checkbox"
                checked={completedState}
                onChange={() => {
                    setCompletedState(!completedState);
                    toggleCompleted(id)
                }}
            />
            <span>{ title }</span>
            <button onClick={(event) => handleDelete(event)} >DLETE</button>
        </div>
    )
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Todo