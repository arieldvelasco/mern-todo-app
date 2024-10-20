import { useState } from "react"
import PropTypes from 'prop-types'

//Material UI Icons
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

//React Bootstrap
import { Button, InputGroup, Form } from 'react-bootstrap'

const TodoForm = ({onAddTodo}) => {

    const [ newTodo, setNewTodo ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newTodo === '') {
            alert('El campo Bew Todo no puede estar vacío')
            return
        }
        onAddTodo(newTodo)
        setNewTodo('')
    }

    return (
        <div>
            <InputGroup className="mb-3 mt-5">
                <InputGroup.Text id="inputGroup-sizing-default">
                    New Todo
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={ newTodo }
                    onKeyDown={(event) => event.key === 'Enter' ? handleSubmit(event) : null}
                    onChange={(event) => setNewTodo(event.target.value)}
                />
                <Button
                    variant="success"
                    className="ml-2"
                    onClick={(event) => handleSubmit(event)}
                >
                    <AddBoxOutlinedIcon />
                </Button>
            </InputGroup>
            
        </div>
    )
}

TodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
};

export default TodoForm