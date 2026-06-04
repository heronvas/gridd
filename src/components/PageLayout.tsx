import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
  children: ReactNode
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
