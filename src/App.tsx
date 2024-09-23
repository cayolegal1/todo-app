import Header from "./components/Header"
import TodoInput from "./components/Input"
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
