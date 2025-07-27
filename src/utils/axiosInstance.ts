// utils/axiosInstance.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { getSession, signIn, signOut } from 'next-auth/react'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const session = await getSession()
      config.headers['Content-Type'] = 'application/json'
      const token = session?.token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  async response => response,
  async (error: AxiosError) => {
    if (typeof window !== 'undefined' && error.response?.status === 401) {
      try {
        await getSession()
      } catch {
        signOut()
      }
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
