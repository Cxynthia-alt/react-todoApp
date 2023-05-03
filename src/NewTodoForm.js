import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    item: ""
  }
  const [todo, setTodo] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { name, value } = e.target
    setTodo(x => ({
      ...x,
      [name]: value
    })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(todo)
    setTodo(INITIAL_STATE)
  }
  return (
    <div>
      <form>
        <label htmlFor="item">New item</label>
        <input type="text" id="item" name="item" value={todo.item} onChange={handleChange} />
        <button onClick={handleSubmit}>Add Me!</button>
      </form>
    </div>
  )
}

export default NewTodoForm
