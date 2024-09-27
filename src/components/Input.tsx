import { useAddTodo } from "@/hooks/useAddTodo";

const TodoInput = () => {
  const { isValid, onSubmit, setText, text } = useAddTodo();

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
