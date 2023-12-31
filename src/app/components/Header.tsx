import { BookOpenCheck } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex h-auto justify-between bg-gray-800 py-8 lg:px-44">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Link href={'/'}>
          <h1 className="text-gray-100">CEFIS</h1>
        </Link>
        <div className="rounded-full border-4 border-gray-100 p-1 text-gray-100">
          <Link href={'/'}>
            <BookOpenCheck className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}
