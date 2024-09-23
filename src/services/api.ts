import axiosClient, {
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";
import type { Request } from "@/types/api";

export class ApiFetch {
    
  private axios: AxiosInstance;

  public constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  private async request<T>({ method, url, axiosConfig }: Request): Promise<T> {
    const { data } = await this.axios({
      ...axiosConfig,
      method,
      url,
    });

    return data;
  }

  public get = async <T = unknown>(
    url: string,
    axiosConfig: AxiosRequestConfig = {}
  ) => {
    return this.request<T>({ method: "GET", url, axiosConfig });
  };
}

export const ApiInstance = new ApiFetch(axiosClient.create());
export const { get } = ApiInstance;
