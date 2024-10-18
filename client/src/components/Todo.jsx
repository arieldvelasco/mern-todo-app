import PropTypes from 'prop-types';

const Todo = ({ title, completed}) => {
    return (
        <div >
            <input type="checkbox" value={ completed } />
            <span>{ title }</span>
        </div>
    )
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

export default Todo