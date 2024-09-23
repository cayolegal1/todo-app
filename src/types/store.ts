export type Todo = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  addTodos: (todos: Todo[]) => void;
  removeTodo: (id: number) => void;
};

export type GetTodosResponse = Todo[];