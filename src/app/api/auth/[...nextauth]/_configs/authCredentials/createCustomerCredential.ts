import { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
// import { pick } from 'ramda'
const CREATE_CUSTOMER_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/User/RegisterCustomer`

type CreateCustomerCredential = {
  username: string
  password?: string
  email?: string
  referralCode?: string
}

export const createCustomerCredential = Credentials({
  id: 'CREATE_CUSTOMER',
  name: 'CreateCustomer',
  credentials: {
    username: { label: 'userName', type: 'text' },
    password: { label: 'password', type: 'password' },
    email: { label: 'email', type: 'text' },
    referralCode: { label: 'referralCode', type: 'text' },
  },
  async authorize(credentials: CreateCustomerCredential | undefined): Promise<User | null> {
    const jsonBody = {
      username: credentials?.username,
      password: credentials?.password,
      email: credentials?.email,
      referralCode: credentials?.referralCode,
    }

    const response = await fetch(`${CREATE_CUSTOMER_URL}`, {
      body: JSON.stringify({
        jsonBody: JSON.stringify(jsonBody),
      }),

      headers: {
        'Content-Type': 'application/json',
        // ...(credentials?.isGuest && credentials?.accessToken && { Authorization: `Bearer ${credentials.accessToken}` }),
      },
      method: 'POST',
    })
    const parsedResponse = await response.json()

    if (!response?.ok && (parsedResponse?.error || !parsedResponse?.success)) {
      throw new Error(
        parsedResponse?.messages[0]?.message || parsedResponse?.error_description || parsedResponse?.error,
      )
    }

    // const selectToken = pick(
    //   ['access_token', 'refresh_token', 'token_type', 'expires_in'],
    //   parsedResponse?.data?.tokenInfo,
    // ) as AuthToken

    // selectToken.expires_in = Date.now() + selectToken.expires_in

    // const userData = await fetchCustomer(selectToken?.access_token)

    return {
      // ...selectToken,
      id: '',
    }
  },
})
