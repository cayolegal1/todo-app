import { TrashIcon, CheckIcon } from "@heroicons/react/16/solid";
import type { Todo } from "@/types/store";
import { useState } from "react";

type TodoItemProps = {
  todo: Todo;
  markAsDone: (todoId: number) => void;
  markAsUndone: (todoId: number) => void;
  removeTodo: (todoId: number) => void;
};

const TodoItem = ({ todo, markAsDone, markAsUndone, removeTodo }: TodoItemProps) => {

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      removeTodo(todo.id);
    }, 300);
  };

  return (
    <li
    className={`todo_animation flex justify-between items-center bg-white border border-gray-300 p-1 mb-2 rounded gap-2 
      transition-transform duration-300 min-w-500 ${isDeleting &&  "-translate-y-48"} ${todo.completed && "bg-gray-200"}`}
    >
      <h3
        className={`transition-all duration-300 ${
          todo.completed ? "line-through opacity-50 scale-95" : "opacity-100"
        }`}
      >
        {todo.title}
      </h3>
      <div className="flex flex-col gap-4">
        <button
          className="bg-green-500 text-white p-1 rounded flex justify-center hover:opacity-80 transition-opacity duration-300"
          onClick={() =>
            !todo.completed ? markAsDone(todo.id) : markAsUndone(todo.id)
          }
        >
          <CheckIcon />
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white p-1 rounded flex justify-center hover:opacity-80 transition-opacity duration-300"
        >
          <TrashIcon width="20px" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
