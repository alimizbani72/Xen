// utils/axiosInstance.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { getSession, signOut } from 'next-auth/react'
import { redirect, RedirectType } from 'next/navigation'

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
  response => response,
  (error: AxiosError) => {
    console.log(error, typeof window !== 'undefined' && error.response?.status === 401)
    if (typeof window !== 'undefined' && error.response?.status === 401) {
      // signOut({ callbackUrl: '/auth/login' })
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
