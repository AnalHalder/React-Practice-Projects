import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

const TodoForm = () => {
  const [todo,setTodo]=useState("");
  const {addTodo}=useTodo();
  const add =  (e) =>{
     e.preventDefault()
     if(!todo) return ;
     addTodo(todo);
     setTodo("");
  }
  return (
    <>
      <form onSubmit={add} className='flex  justify-center p-4'>
        <input type="text"
          onChange={(e) => { setTodo(e.target.value) }}
          value={todo}
          placeholder='add your tasks'
        />
        <button type='submit' className='bg-red-500'>add</button>
      </form>
    </>
  )
}

export default TodoForm