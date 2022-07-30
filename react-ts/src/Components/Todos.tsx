import React, { useContext } from "react"

import TodoItem from "./TodoItem"
import { TodosContext } from "../store/todos-context"

import classes from "./Todos.module.css"

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
