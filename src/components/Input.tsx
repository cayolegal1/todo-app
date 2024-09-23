import { useState } from "react";
import { useTodoStore } from "@/store";
import { createTodo } from "@/helpers/todo-helpers";

const TodoInput = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const onSubmit = () => {
    const todo = createTodo(text);
    addTodo(todo);
    setText("");
  };

  return (
    <div className="mb-4 flex flex-wrap justify-center items-center gap-2">
      <input
        className="border border-gray-300 p-2 rounded w-80"
        onChange={(e) => setText(e.target.value)}
        placeholder="Agregar una nueva tarea"
        type="text"
        value={text}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={onSubmit}
        disabled={!(text.length > 0)}
      >
        Agregar
      </button>
    </div>
  );
};

export default TodoInput;
