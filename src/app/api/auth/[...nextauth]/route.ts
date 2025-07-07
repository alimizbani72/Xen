import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/_configs/nextAuthOptions'
import NextAuth from 'next-auth/next'

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
