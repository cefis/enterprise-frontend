'use client'

import Link from 'next/link'
import Header from '../components/Header'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../lib/axios'
import { useRouter } from 'next/navigation'

const newUserFormSchema = z.object({
  name: z.string().min(1, { message: 'O usuario não pode ser vazio' }),
  password: z.string().min(1, { message: 'A senha não pode ser vazio' }),
  confirmPassword: z.string().min(1, { message: 'A senha não pode ser vazio' }),
})

type NewUserFormInputs = z.infer<typeof newUserFormSchema>

export default function User() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  })

  const router = useRouter()

  async function handleCreateNewUser(data: NewUserFormInputs) {
    const { name, password } = data
    console.log(data)

    if (data.password === data.confirmPassword) {
      await api.post('/users', {
        name,
        password,
      })
      reset()
      router.push('/')
    } else {
      alert('Os campos senha e confirmar senha não são iguais')
    }
  }
  return (
    <div>
      <div className="p-4 md:p-0">
        <Header />
      </div>
      <div className="p-4 py-5 md:px-44 md:py-20">
        <h1 className=" flex justify-center text-2xl text-gray-100 md:text-4xl">
          Cadastro de Usuario
        </h1>
        <div className="mx-auto mt-10 max-w-xs border-2 border-gray-500 p-4 md:max-w-xl">
          <form onSubmit={handleSubmit(handleCreateNewUser)}>
            <div className="flex min-w-full flex-col px-4">
              <label htmlFor="" className="text-sm font-bold text-gray-200">
                USUARIO
              </label>
              <input
                type="text"
                placeholder="Exemplo: cefis123"
                {...register('name')}
                className="mt-2 flex h-[40px] border border-gray-500 bg-transparent p-2 text-gray-400 placeholder-gray-400"
              />
              <div>
                {errors.name ? (
                  <h1 className="text-gray-300">{errors.name.message}</h1>
                ) : (
                  <h1 className="text-gray-800">.</h1>
                )}
              </div>
            </div>
            <div className="flex min-w-full flex-col px-4 text-gray-200">
              <label htmlFor="" className="text-sm font-bold">
                SENHA
              </label>
              <input
                type="password"
                {...register('password')}
                placeholder="Sua Senha"
                className="mt-2 flex h-[40px] border border-gray-500 bg-transparent p-2 text-gray-400 placeholder-gray-400"
              />
              <div>
                {errors.password ? (
                  <h1 className="text-gray-300">{errors.password.message}</h1>
                ) : (
                  <h1 className="text-gray-800">.</h1>
                )}
              </div>
            </div>
            <div className="flex min-w-full flex-col px-4 text-gray-200">
              <label className="text-sm font-bold">CONFIRMAR A SENHA</label>
              <input
                type="password"
                placeholder="Sua Senha"
                {...register('confirmPassword')}
                className="mt-2 flex h-[40px] border border-gray-500 bg-transparent p-2 text-gray-400 placeholder-gray-400"
              />
              <div>
                {errors.password ? (
                  <h1 className="text-gray-300">{errors.password.message}</h1>
                ) : (
                  <h1 className="text-gray-800">.</h1>
                )}
              </div>
            </div>
            <div className="mx-auto mt-2 flex justify-center p-4">
              <button
                className="w-full bg-gray-500 p-4 text-white hover:bg-gray-600"
                type="submit"
                disabled={isSubmitting}
              >
                CADASTRAR
              </button>
            </div>
          </form>
        </div>
        <div className="mx-auto mt-4 flex flex-col items-center justify-center gap-2 text-lg text-gray-300">
          <span>Ja possui uma conta?</span>
          <Link href={'/'}>
            <button className="flex w-[320px] max-w-xs justify-center border border-gray-600 bg-gray-200 p-2 text-sm font-bold text-gray-400 hover:text-black md:w-[576px] md:max-w-xl">
              FAÇA LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
