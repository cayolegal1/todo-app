import type { Todo } from "@/types/store";

export const createTodo = (text: string): Todo => {
  return {
    id: Date.now(),
    body: "",
    completed: false,
    userId: 1,
    title: text,
  };
};
