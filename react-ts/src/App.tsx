import "./App.css"
import NewTodo from "./Components/NewTodo"
import Todos from "./Components/Todos"
import TodosContextProvider from "./store/todos-context"

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")]

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  )
}

export default App
