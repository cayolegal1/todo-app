import type { AxiosRequestConfig } from "axios";

type HttpAceptedMethods = "DELETE" | "GET" | "POST" | "PUT";

export type Request = {
  axiosConfig: AxiosRequestConfig;
  method: HttpAceptedMethods;
  url: string;
};
