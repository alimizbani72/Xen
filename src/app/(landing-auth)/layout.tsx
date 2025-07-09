import FooterSection from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import { MaterialProvider } from '@/provider/material/MaterialProvider'
import { Box, Stack } from '@mui/material'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'
import '../../../public/assets/global.css'

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
