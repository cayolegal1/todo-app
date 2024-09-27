import { useState, useEffect } from "react";
import { useTodoStore } from "@/store";
import { useDebounce } from "./useDebounce";
import { createTodo } from "@/helpers/todo-helpers";

export const useAddTodo = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 300);
  const addTodo = useTodoStore((state) => state.addTodo);

  const isValid = debouncedText.length > 0;

  const onSubmit = () => {
    const todo = createTodo(debouncedText);
    addTodo(todo);
    setText("");
  };

  useEffect(() => {
    const onKeyEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter" && isValid) {
        onSubmit();
      }
    };

    document.addEventListener("keypress", onKeyEnter);
    return () => document.removeEventListener("keypress", onKeyEnter);
  }, [debouncedText]);


  return {
    isValid,
    onSubmit,
    setText,
    text,
  }
};
