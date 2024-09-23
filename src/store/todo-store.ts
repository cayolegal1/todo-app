import { create } from "zustand";
import type { TodoStore } from "@/types/store";

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((_, index) => index !== id),
    })),
}));

export default useTodoStore;
