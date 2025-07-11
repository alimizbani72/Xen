import { signINCredential } from '@/app/api/auth/[...nextauth]/_configs/authCredentials'
import { NextAuthOptions, Session } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export type AuthToken = {
  access_token: string
  refresh_token: string
  expires_in: number
  user: Session['user']
  error?: string | null
} & JWT

const nextAuthDefaultOptions = (): NextAuthOptions => {
  const defaultOptions: NextAuthOptions = {
    providers: [signINCredential],
    session: {
      strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async jwt({ token, user }: any): Promise<AuthToken> {
        if (user?.token) {
          return { ...user, ...token }
        }

        if (token.iat && !token.token) {
          throw Error('unauthenticated user')
        }

        return { ...token }
      },

      async session({ session, token }: any): Promise<any> {
        try {
          if (token) {
            session.token = token.token
            session.refresh_token = token.refresh_token
            session.user = token.user
          }

          return session
        } catch (error) {
          return session
        }
      },
      async redirect({ url, baseUrl }) {
        if (url.startsWith('/api/auth/error')) {
          return baseUrl
        }
        return url
      },
    },
    pages: { error: '' },
    debug: false,
  }
  return defaultOptions
}

export const nextAuthOptions = nextAuthDefaultOptions()
