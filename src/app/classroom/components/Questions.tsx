export default function Questions() {
  return (
    <div className="mt-4 flex flex-col gap-2 bg-gray-700 p-4">
      <h1 className="text-gray-100">Deixe sua pergunta!</h1>
      <textarea
        placeholder="Faça a sua pergunta"
        className="mb-1 h-28 rounded p-2 text-gray-700"
      />
      <div className="flex justify-end">
        <button className="w-24 rounded-lg bg-gray-600 text-green-100 hover:bg-gray-500">
          Publicar
        </button>
      </div>
    </div>
  )
}
