import Link from 'next/link'

export default function Main() {
  return (
    <div className="px-44 py-5">
      <div className="mx-auto mt-4 max-w-xl border border-gray-500 p-4">
        <form>
          <div className="flex min-w-full flex-col p-4">
            <label htmlFor="" className="text-sm font-bold text-gray-100">
              USUARIO
            </label>
            <input
              type="text"
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
              placeholder="Sua Senha"
              className="mt-2 flex h-[40px] border border-gray-500 bg-transparent p-2 text-gray-400 placeholder-gray-400"
            />
          </div>
        </form>
        <div className="mx-auto mt-4 flex justify-center p-4">
          <button
            className="w-full bg-gray-500 p-4 text-white hover:bg-gray-600"
            type="submit"
          >
            ENTRAR
          </button>
        </div>
      </div>
      <div className="mx-auto mt-4 flex flex-col items-center justify-center gap-2 text-lg text-gray-400">
        <span>Novo na CEFIS?</span>
        <Link href={'/users'}>
          <button className="flex w-[576px] max-w-xl justify-center border border-gray-600 bg-gray-200 p-2 text-sm font-bold text-gray-400 hover:text-black">
            CRIAR UMA CONTA NA CEFIS
          </button>
        </Link>
      </div>
    </div>
  )
}
