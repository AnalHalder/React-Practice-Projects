import { useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }
  
  return (
    <TodoProvider value={{ todos,addTodo, deleteTodo}}>
      <TodoForm />
      <TodoItem />
    </TodoProvider>
  )
}

export default App
