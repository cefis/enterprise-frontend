'use client'

import { AuthContext } from '@/context/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'

// interface dataProps {
//  name: string
//  password: string
// }

export default function Main() {
  const { register, handleSubmit } = useForm()
  const { SignIn } = useContext(AuthContext)

  function handleSigIn(data: any) {
    SignIn(data)
  }
  return (
    <div className="py-5 md:px-44">
      <div className="mx-auto mt-4 max-w-xs border border-gray-500 p-4 md:max-w-xl">
        <form onSubmit={handleSubmit(handleSigIn)}>
          <div className="flex min-w-full flex-col p-4">
            <label htmlFor="" className="text-sm font-bold text-gray-100">
              USUARIO
            </label>
            <input
              type="text"
              {...register('name')}
              placeholder="Exemplo: cefis123"
              className="mt-2 flex h-[40px] border border-gray-500 bg-transparent p-2 text-gray-400 placeholder-gray-400"
            />
          </div>
          <div className="g-2 flex min-w-full flex-col p-4">
            <label htmlFor="" className="text-sm font-bold text-gray-100">
              SENHA
            </label>
            <input
              type="password"
              {...register('password')}
              placeholder="Sua Senha"
              className="mt-2 flex h-[40px] border border-gray-500 bg-transparent p-2 text-gray-400 placeholder-gray-400"
            />
          </div>

          <div className="mx-auto mt-4 flex justify-center p-4">
            <button
              className="w-full bg-gray-500 p-4 text-white hover:bg-gray-600"
              type="submit"
            >
              ENTRAR
            </button>
          </div>
        </form>
      </div>
      <div className="mx-auto mt-4 flex flex-col items-center justify-center gap-2 text-lg text-gray-400">
        <span>Novo na CEFIS?</span>
        <Link href={'/user'}>
          <button className="flex w-[320px] max-w-sm justify-center border border-gray-600 bg-gray-200 p-2 text-sm font-bold text-gray-400 hover:text-black md:w-[576px]">
            CRIAR UMA CONTA NA CEFIS
          </button>
        </Link>
      </div>
    </div>
  )
}
