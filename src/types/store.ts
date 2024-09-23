export type Todo = {
  id: number;
  title: string;
  body: string;
  userId: number;
  completed: boolean;
};

export type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  addTodos: (todos: Todo[]) => void;
  markAsDone: (id: number) => void;
  markAsUndone: (id: number) => void;
  removeTodo: (id: number) => void;
};

export type GetTodosResponse = Todo[];