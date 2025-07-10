import { axiosInstance } from '@/utils'
import { useQuery, UseQueryOptions, UseMutationOptions, useMutation } from '@tanstack/react-query'
import { AxiosRequestConfig, Method } from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

// Query
type ApiQueryOptions<T> = {
  url: string
  axiosConfig?: AxiosRequestConfig
  queryOptions?: Omit<UseQueryOptions<T>, 'queryKey'>
}

export function useApiQuery<T = any>({ url, axiosConfig, queryOptions }: ApiQueryOptions<T>) {
  return useQuery<T>({
    queryKey: [url, axiosConfig?.params],
    queryFn: async () => {
      const response = await axiosInstance.get<T>(url, axiosConfig)
      return response.data
    },
    ...queryOptions,
  })
}

// Mutation
type MutationParams<TPayload> = {
  url: string
  method?: Method
  data?: TPayload
  config?: AxiosRequestConfig
}

export function useApiMutation<TPayload = any, TResponse = any>(
  options?: UseMutationOptions<TResponse, Error, MutationParams<TPayload>>,
) {
  return useMutation<TResponse, Error, MutationParams<TPayload>>({
    mutationFn: async ({ url, method = 'POST', data, config }) => {
      const response = await axiosInstance.request<TResponse>({
        url: baseUrl + url,
        method,
        data,
        ...config,
      })
      return response.data
    },
    ...options,
  })
}
