import TodoItem from "./TodoItem";
import Loader from "./Loader";
import { useGetTodos } from "@/hooks/useGetTodos";
import { useTodoStore } from "@/store";

const TodoList = () => {
  const { isLoading, todos } = useGetTodos();
  const markAsDone = useTodoStore(state => state.markAsDone);
  const markAsUndone = useTodoStore(state => state.markAsUndone);
  const removeTodo = useTodoStore(state => state.removeTodo);

  if (isLoading) {
    return <Loader />
  }

  return (
    <ul className="w-full max-w-md">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markAsDone={markAsDone}
          markAsUndone={markAsUndone}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;