import Credentials from 'next-auth/providers/credentials'
import { User } from 'next-auth'
import axios from 'axios'

export type RefreshCredentials = {
  refresh: string
  access_token: string
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const refreshCredential = Credentials({
  id: 'REFRESH',
  name: 'refresh',
  credentials: {
    access_token: { label: 'access_token', type: 'text' },
    refresh: { label: 'refresh', type: 'text' },
  },
  async authorize(credentials?: RefreshCredentials): Promise<User | null> {
    try {
      const response = await axios.post(baseUrl + '/auth/refresh', {
        access_token: credentials?.access_token,
        refresh: credentials?.refresh,
      })
      const userData = await axios.get(baseUrl + '/my/info', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${response?.data?.token}`,
        },
      })
      return {
        token: response?.data?.token,
        refresh_token: response?.data?.refresh,
        expires_in: Date.now() + 4 * 60 * 1000,
        user: {
          email: userData?.data?.email,
          username: userData?.data?.username,
          walletAmount: userData?.data?.wallet_amount,
          referralCode: userData?.data?.referal_code,
          used_referral_code: userData?.data?.used_referal_code,
        },
      }
    } catch (error) {
      throw Error('Error: ' + error)
    }
  },
})
