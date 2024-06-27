import React from 'react'

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <>
      <div className='flex  justify-center p-4'>
        <input type="text"
          onChange={(e) => { setTodo(e.target.value) }}
          value={todo}
          placeholder='add your tasks'
        />
        <button onClick={addTodo} className='bg-red-500'>add</button>
      </div>
    </>
  )
}

export default TodoInput