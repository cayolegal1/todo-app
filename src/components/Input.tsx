import { useEffect, useState } from "react";
import { useTodoStore } from "@/store";
import { useDebounce } from "@/hooks/useDebounce";
import { createTodo } from "@/helpers/todo-helpers";

const TodoInput = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 300);
  const addTodo = useTodoStore((state) => state.addTodo);

  const isValid = debouncedText.length > 0;

  const onSubmit = () => {
    const todo = createTodo(debouncedText);
    addTodo(todo);
    setText("");
  };

  useEffect(() => {
    const onKeyEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter" && isValid) {
        onSubmit();
      }
    };

    document.addEventListener("keypress", onKeyEnter);
    return () => document.removeEventListener("keypress", onKeyEnter);
  }, [debouncedText]);

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
        disabled={!isValid}
      >
        Agregar
      </button>
    </div>
  );
};

export default TodoInput;
