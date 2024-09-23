import { TrashIcon, CheckIcon } from "@heroicons/react/16/solid";
import type { Todo } from "@/types/store";

type TodoItemProps = {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className="flex justify-between items-center bg-white border border-gray-300 p-2 mb-2 rounded gap-2">
      <h1 className="text-black">{todo.title}</h1>
      <div className="flex flex-col gap-4">
        <button className="bg-green-500 text-white p-1 rounded flex justify-center hover:opacity-80 transition-opacity duration-300">
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
