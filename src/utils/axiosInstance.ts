// utils/axiosInstance.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { getSession } from 'next-auth/react'
import { redirect, RedirectType } from 'next/navigation'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const session = await getSession()
      const token = session?.token
      if (token) {
        config.headers['Content-Type'] = 'application/json'
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (
      typeof window !== 'undefined' &&
      error.response?.status === 401 &&
      !window.location.pathname.includes('/auth')
    ) {
      redirect('/auth/login', RedirectType.replace)
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
