const TodoInput = () => {
  return (
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Agregar una nueva tarea"
        className="border border-gray-300 p-2 rounded w-80"
      />
      <button className="bg-blue-500 text-white p-2 rounded ml-2">Agregar</button>
    </div>
  );
};

export default TodoInput;
