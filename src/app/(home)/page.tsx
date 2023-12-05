import Image from 'next/image'
import Main from './components/Main'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <div className="hidden md:flex">
        <Header />
      </div>
      <div className="flex flex-col justify-between p-4 md:flex-row md:px-44">
        <div>
          <h1 className="text-4xl font-bold text-gray-100 md:p-0 md:text-9xl">
            CEFIS.
          </h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-100">
            BEM-VINDO AO FUTURO DO CONHECIMENTO.
          </h2>
          <h2 className="mt-2 max-w-xs text-sm text-gray-200 md:mt-0 md:max-w-3xl md:text-lg ">
            A CEFIS é a solução de atualização e capacitação corporativa. Baixe
            as aulas em seu celular para estudar offline e assista quando
            preferir, onde quiser. São milhares de aulas disponíveis, além de
            novas aulas toda semana.
          </h2>
        </div>
        <div className="mt-2 md:mt-0">
          <Image
            src={'/devices-courses.png'}
            alt=""
            width={600}
            height={500}
            className="max-w-xs md:max-w-xl"
            priority
          />
        </div>
      </div>

      <Main />
    </div>
  )
}
