import { useState } from 'react';
import PropTypes from 'prop-types';

// Material UI Icons
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

//React Bootstrap
import { Button, Card, Form, InputGroup } from 'react-bootstrap';

const Todo = ({ id, title, completed, onDeleteTodo, toggleCompleted, onEditedTodo }) => {
    const [ completedState, setCompletedState ] = useState(completed);
    const [ newTodo, setNewTodo ] = useState(title);
    const [ editState, setEditState ] = useState(false);

    const handleDelete = (event) => {
        event.preventDefault();
        onDeleteTodo(id);
    }

    const toggleEdit = () => {
        console.log('toggleEdit');
        
        setEditState(!editState)
    }

    const handleDoubleClick = (event) => {
        if(event.detail === 2) {
            toggleEdit()
    }}

    const handleEditedTodo = (event) => {
        event.preventDefault()
        onEditedTodo(id, newTodo)
        toggleEdit()
    }

    return (
        <Card style={{ maxWidth: '30rem', width: '30rem' }} className='mb-3 mx-auto'>
            <Card.Body>
            {
                editState ?
                    <Form className='d-flex align-items-center justify-content-between' >
                        <InputGroup >
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Todo
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                value={ newTodo }
                                onKeyDown={(event) => event.key === 'Enter' ? handleEditedTodo(event) : null}
                                onChange={(event) => setNewTodo(event.target.value)}
                            />
                            <Button
                                variant="success"
                                className="ml-2"
                                onClick={event => handleEditedTodo(event)}
                            >
                                <CheckCircleOutlineOutlinedIcon />
                            </Button>
                        </InputGroup>
                    </Form>
                    :
                    <Form className='d-flex align-items-center justify-content-between' >
                        <div className='d-flex align-items-center' >
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                checked={completedState}
                                onChange={() => {
                                    setCompletedState(!completedState);
                                    toggleCompleted(id)
                                }}
                            />
                            <Form.Label
                                className={`${completedState? 'text-decoration-line-through' : ''}`}
                                onDoubleClick={(event) => handleDoubleClick(event)}
                                type='text'
                                value={newTodo}
                            >{title}</Form.Label>
                        </div>
                        <Button variant='danger' className='ml-15' onClick={(event) => handleDelete(event)}><DeleteForeverOutlinedIcon /></Button>
                    </Form>
            }
            </Card.Body>
        </Card>
    )
}

Todo.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    onEditedTodo: PropTypes.func.isRequired
}

export default Todo