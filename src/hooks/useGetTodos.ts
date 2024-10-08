import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import { useTodoStore } from "@/store";
import type { GetTodosResponse } from "@/types/store";

const url = "https://jsonplaceholder.typicode.com/todos?userId=1";

export const useGetTodos = () => {

  const addTodos = useTodoStore(state => state.addTodos);
  const todos = useTodoStore(state => state.todos);

  const { data, isFetching: isLoading } = useQuery<GetTodosResponse>({
    queryKey: ["todos"],
    queryFn: () => get(url),
    initialData: [],
    initialDataUpdatedAt: 0,
  });

  useEffect(() => {
    if (data.length > 0) {
      addTodos(data.map((data) => ({ ...data, completed: false })));
    }
  }, [data]);

  return {
    isLoading,
    todos,
  }
};