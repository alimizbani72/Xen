import { removeToken, setToken } from '@/utils/localstorage'

export const signIn = async ({ email, password, router }: any) => {
  await new Promise(res => setTimeout(res, 500))

  if (!email || !password) {
    throw new Error('Missing credentials')
  }

  setToken('mock-token-123')

  router.replace('/dashboard')
}

export const signOut = async (router?: any) => {
  removeToken()
  router?.replace('/auth/login')
}
