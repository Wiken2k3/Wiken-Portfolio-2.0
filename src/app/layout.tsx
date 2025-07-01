import '@/styles/globals.css'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Wiken Portfolio',
  description: 'Portfolio cá nhân của Wiken',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
