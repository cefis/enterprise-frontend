export default function Answers() {
  return (
    <div className="mt-4 rounded-xl bg-gray-700">
      <div className="flex flex-col gap-4 rounded-lg p-4">
        <div className="flex justify-between">
          <h1 className="text-lg text-gray-200">Anderson</h1>
          <h2 className="text-gray-400">Há 1 dia</h2>
        </div>
        <div className="text-gray-400">
          Qual a necessidade de usar tanto javascript
        </div>

        <div className="overflow-hidden rounded-t-xl">
          <h1 className="bg-gray-600 p-2 text-lg text-gray-300">
            Resposta de: André
          </h1>
          <h1 className="bg-gray-400 p-2 text-gray-900">
            Para o sistema ficar mais pesado, diante, que nós não gostamos de
            coisas rapidas e de forma menos eficiente
          </h1>
          <div className="mt-2 flex justify-end">
            <button className="rounded-md bg-gray-600 p-1 text-green-100 hover:bg-gray-500">
              Responder
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
