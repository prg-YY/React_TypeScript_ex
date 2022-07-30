import { useRef, useContext } from "react"

import { TodosContext } from "../store/todos-context"

import classes from "./NewTodo.module.css"

const NewTodo: React.FC = (props) => {
  const todoCtx = useContext(TodosContext)

  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submidHandler = (e: React.FormEvent) => {
    e.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      //Throw an error
      return
    }

    todoCtx.addTodo(enteredText)
  }

  return (
    <form onSubmit={submidHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input
        type="text"
        id="text"
        placeholder="write something"
        ref={todoTextInputRef}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
