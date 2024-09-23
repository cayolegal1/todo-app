import { create } from "zustand";
import type { TodoStore } from "@/types/store";

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
  addTodos: (todos) => set((state) => ({ todos: [...state.todos, ...todos] })),
  markAsDone: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      ),
    })),
  markAsUndone: (todoId) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: false } : todo
      ),
    })),
  removeTodo: (todoId) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoId),
    })),
}));
