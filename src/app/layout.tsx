import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cefis - Candidatos',
  description: 'Processo de seleção de candidatos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="pt" className="bg-gray-800">
        <body className={nunito.className}>{children}</body>
      </html>
    </AuthProvider>
  )
}
