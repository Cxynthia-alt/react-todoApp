import React, { useState } from 'react';
import Todo from './Todo'
import { v4 as uuid } from 'uuid'
import NewTodoForm from './NewTodoForm'

const TodoList = () => {
  // const INITIAL_STATE = [
  //   { id: uuid(), item: "laundry" },
  //   { id: uuid(), item: "shopping" }
  // ]
  const INITIAL_STATE = []
  const [todoList, setTodoList] = useState(INITIAL_STATE)
  const addTodo = (newTodo) => {
    setTodoList(todolist => [
      ...todoList,
      { item: newTodo.item, id: uuid() }
    ])
  }

  return (
    <div>
      <h3>TodoList</h3>
      <NewTodoForm addTodo={addTodo} />
      {todoList.map(todo => <Todo item={todo.item} key={todo.id} todoList={todoList} setTodoList={setTodoList} id={todo.id} />)}
    </div>
  )
}

export default TodoList
