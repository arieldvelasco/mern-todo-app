import { useState } from "react"
import PropTypes from 'prop-types'

const TodoForm = ({onAddTodo}) => {

    const [ newTodo, setNewTodo ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onAddTodo(newTodo)
    }

    return (
        <div>
            <input type="text" value={ newTodo } onChange={(event) => setNewTodo(event.target.value)} />
            <button onClick={(event) => handleSubmit(event)} >ADD</button>
        </div>
    )
}

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm