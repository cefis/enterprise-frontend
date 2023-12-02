import { Hourglass } from 'lucide-react'

interface coursesProps {
  id: string
  title: string
  duration: number
  description: string
  avatar: string
}

export default function Classes({
  title,
  duration,
  description,
  avatar,
}: coursesProps) {
  return (
    <div className="h-40 w-96 rounded-lg bg-gray-700 p-4">
      <div className="flex gap-4 ">
        <div>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-600 text-3xl font-bold text-gray-900">
            {avatar}
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
          <h2 className="flex items-center gap-1 text-base text-gray-400">
            <Hourglass width={15} height={15} className="text-green-100" />
            {duration} Horas
          </h2>
        </div>
      </div>
      <div>
        <h1 className="mt-4 text-gray-300">{description}</h1>
      </div>
    </div>
  )
}
