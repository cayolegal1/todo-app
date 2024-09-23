import TodoItem from "./TodoItem";
import Loader from "./Loader";
import { useGetTodos } from "@/hooks/useGetTodos";

const TodoList = () => {
  const { isLoading, todos } = useGetTodos();

  if (isLoading) {
    return <Loader />
  }

  return (
    <ul className="w-full max-w-md">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;