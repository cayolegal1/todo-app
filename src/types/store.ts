export type TodoStore = {
  todos: string[];
  addTodo: (todo: string) => void;
  removeTodo: (id: number) => void;
};

export type Todo = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
