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

    const updateTodo = async (id, title, completed) => {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                completed: completed
            })
        })
        const todo = await res.json()
        console.log(todo);
    }

    const toggleCompleted = async (id) => {
        const res = await fetch(`http://localhost:3000/api/todos/completed/${id}`, {
            method: 'PUT'
        })
        const response = await res.json()
        console.log(response);
        
    }

    const deleteTodo = async (id) => {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
            method: 'DELETE'
        })
        const response = await res.json()
        console.log(response);
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
            <TodoList todos={ todos } onDeleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
        </div>
    )
}

export default App