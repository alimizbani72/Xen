import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  type Session = {
    token: string
    refresh_token: string
    user: {
      username: string
      email: string
    }
  } & Omit<DefaultSession, 'user' | 'id'>

  type User = {} & Omit<DefaultUser, 'id'>
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    username: string
    email: string
  }
}
