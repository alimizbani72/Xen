import FooterSection from '@/app/_components/Footer'
import Header from '@/app/_components/Header'
import { Box } from '@mui/material'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
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
    <Box position="relative">
      <Header />
      {children}
      <FooterSection />
    </Box>
  )
}
