import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {

    const [ todos, setTodos ] = useState([])

    const getTodos = async () => {
        const res = await fetch('http://localhost:3000/api/todos')
        const todoList = await res.json()
        
        return(todoList);
    }

    const handleAddTodo = async (newTodo) => {
        const res = await fetch('http://localhost:3000/api/todos', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: newTodo,
                completed: false
            })
        })
        const todo = await res.json()
        console.log(todo);
    }

    const updateTodo = async () => {
        const res = await fetch('http://localhost:3000/api/todos/671215bd4efc705bbd8f006e', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Updated Todo',
                completed: true
            })
        })
        const todo = await res.json()
        console.log(todo);
    }

    const deleteTodo = async () => {
        const res = await fetch('http://localhost:3000/api/todos/671215bd4efc705bbd8f006e', {
            method: 'DELETE'
        })
        const todo = await res.json()
        console.log(todo);
    }

    useEffect(() => {
        console.log(getTodos().then((data) => setTodos(data)))
    }, [])

    useEffect(() => {
        getTodos().then((data) => setTodos(data))
    }, [todos])

    return (
        <div>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoList todos={ todos } />
        </div>
    )
}

export default App