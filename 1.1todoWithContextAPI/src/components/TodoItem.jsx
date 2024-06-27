import React from 'react'
import { useTodo } from '../contexts/TodoContext';
const TodoItem = () => {
   const {todos,deleteTodo} = useTodo();
  return (
    <>
      {
        todos.length > 0 ? (
          <ul>
            {todos.map((entry, index) => (
              <div className='flex justify-center p-2 gap-2'>
                <li key={index} className='text-black' >{entry}</li>
                <button
                  onClick={() => {
                    deleteTodo(entry);
                  }}
                  className='bg-red-500 text-white'
                >delete</button>
              </div>
            ))}
          </ul>
        ) : (
          <div className='text-white flex justify-center'> no task found</div>
        )
      }
    </>
  )
}

export default TodoItem