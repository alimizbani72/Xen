import ClientLayout from '@/app/ClientLayout'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../../public/global.css'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xen',
  description: 'Xen',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
