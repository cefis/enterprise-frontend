import Image from 'next/image'
import Main from './components/Main'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-between px-44">
        <div>
          <h1 className="text-9xl font-bold text-gray-100">CEFIS.</h1>
          <h2 className="mt-4 text-2xl font-bold text-gray-100">
            BEM-VINDO AO FUTURO DO CONHECIMENTO.
          </h2>
          <h2 className="max-w-3xl text-lg text-gray-200">
            A CEFIS é a solução de atualização e capacitação corporativa. Baixe
            as aulas em seu celular para estudar offline e assista quando
            preferir, onde quiser. São milhares de aulas disponíveis, além de
            novas aulas toda semana.
          </h2>
        </div>
        <div>
          <Image src={'/devices-courses.png'} alt="" width={600} height={500} />
        </div>
      </div>

      <Main />
    </div>
  )
}
