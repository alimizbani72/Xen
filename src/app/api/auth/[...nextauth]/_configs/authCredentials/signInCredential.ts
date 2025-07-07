import Credentials from 'next-auth/providers/credentials'
import { User } from 'next-auth'
import axios from 'axios'

export type SignInCredentials = {
  email: string
  password: string
  refreshToken?: string
}

type signINResponse = {
  token: string
  refresh_token: string
  user: {
    username: string
    email: string
  }
  id: string
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const signINCredential = Credentials({
  id: 'SIGN_IN',
  name: 'SignIn',
  credentials: {
    email: { label: 'Email', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials?: SignInCredentials): Promise<User | null> {
    try {
      const response = await axios.post(baseUrl + '/auth/login', {
        email: credentials?.email,
        password: credentials?.password,
      })

      const userData = await axios.get(baseUrl + '/my/info', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${response?.data?.token}`,
        },
      })
      return {
        token: response?.data?.token,
        refresh_token: response?.data?.token,
        user: {
          email: userData?.data?.email,
          username: userData?.data?.username,
        },
      }
    } catch (error) {
      throw Error('Error: ' + error)
    }
  },
})
