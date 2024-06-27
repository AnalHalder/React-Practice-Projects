import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  }
  const editTodo = (index) => {
    setTodo(todos[index]);
    let newTodos = todos.filter((todo) => {
      return todo != todos[index];
    });
    setTodos(newTodos)
  }

  return (
    <>
      <div>
        <h1 className='text-white text-3xl text-center'>To Do List App</h1>
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
        <TodoList list={todos} removeTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </>
  )
}

export default App
