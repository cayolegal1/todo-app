import { TrashIcon, CheckIcon } from "@heroicons/react/16/solid";
import type { Todo } from "@/types/store";

type TodoItemProps = {
  todo: Todo;
  markAsDone: (todoId: number) => void;
  markAsUndone: (todoId: number) => void;
}

const TodoItem = ({ todo, markAsDone, markAsUndone }: TodoItemProps) => {
  return (
    <li
      className={`flex justify-between items-center bg-white border border-gray-300 p-2 mb-2 rounded gap-2`}
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
        <button className="bg-red-500 text-white p-1 rounded flex justify-center hover:opacity-80 transition-opacity duration-300">
          <TrashIcon width="20px" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
