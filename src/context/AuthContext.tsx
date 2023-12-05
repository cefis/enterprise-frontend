'use client'

import { api } from '@/app/lib/axios'
import { useRouter } from 'next/navigation'
import { setCookie } from 'nookies'
import { ReactNode, createContext, useState } from 'react'

interface signInProps {
  name: string
  password: string
}

type AuthContextType = {
  user: string
  SignIn: (data: signInProps) => Promise<void>
}

interface childrenProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: childrenProps) {
  const router = useRouter()
  const [user, setUser] = useState('')

  async function SignIn({ name, password }: signInProps) {
    const token = await api.post('/login', {
      name,
      password,
    })
    setCookie(undefined, 'cefis-token', token.data.access_token, {
      maxAge: 60 * 60 * 1,
    })

    const response = await api.get('/me')
    setUser(response.data)

    router.push('/classroom')
  }

  return (
    <AuthContext.Provider value={{ SignIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
