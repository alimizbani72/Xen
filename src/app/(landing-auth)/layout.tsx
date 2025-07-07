import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../../../public/assets/global.css'
import { MaterialProvider } from '@/provider/material/MaterialProvider'
import { Box } from '@mui/material'
import Header from '@/app/_components/Header'
import FooterSection from '@/app/_components/Footer'
import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xen',
  description: 'Xen',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <FooterSection />
    </>
  )
}
