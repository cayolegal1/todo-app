import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { get } from "@/services/api";
import { useTodoStore } from "@/store";
import type { GetTodosResponse } from "@/types/store";

const url = "https://jsonplaceholder.typicode.com/posts?userId=1";

export const useGetTodos = () => {
  
  const addTodos = useTodoStore(state => state.addTodos);
  const todos = useTodoStore(state => state.todos);

  const { data, isFetching: isLoading } = useQuery<GetTodosResponse>({
    queryKey: ["todos"],
    queryFn: () => get(url),
    initialData: [],
    initialDataUpdatedAt: 5000,
  });

  useEffect(() => {
    if (data.length > 0) {
      addTodos(data);
    }
  }, [data]);

  return {
    isLoading,
    todos,
  }
};