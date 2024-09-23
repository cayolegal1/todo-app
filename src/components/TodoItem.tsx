const TodoItem = () => {
  return (
    <li className="flex justify-between items-center bg-white border border-gray-300 p-2 mb-2 rounded">
      <span>Tarea de ejemplo</span>
      <button className="bg-red-500 text-white p-1 rounded">Eliminar</button>
    </li>
  );
};

export default TodoItem;
