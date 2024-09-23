import { create } from "zustand";
import type { TodoStore } from "@/types/store";

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  addTodos: (todos) => set((state) => ({ todos: [...state.todos, ...todos] })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
