import React from 'react'

const TodoList = ({ list, removeTodo, editTodo }) => {
  return (
    <>
      {
        list.length > 0 ? (
          <ul>
            {list.map((entry, index) => (
              <div className='flex justify-center p-2 gap-2'>
                <li key={index} className='text-white' >{entry}</li>
                <button
                  onClick={() => {
                    removeTodo(entry);
                  }}
                  className='bg-red-500 text-white'
                >delete</button>
                <button
                  onClick={() => {
                    editTodo(index)
                  }}
                  className='bg-green-500  text-white'
                >edit</button>
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

export default TodoList