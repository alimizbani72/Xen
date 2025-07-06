import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../../../public/assets/global.css'
import { MaterialProvider } from '@/provider/material/MaterialProvider'
import { Box } from '@mui/material'
import Header from '@/app/_components/Header'
import FooterSection from '@/components/Footer'

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
        <MaterialProvider>
          <Box
            sx={{
              minHeight: '100dvh',
              background:
                'linear-gradient(180deg, #010226 0%, #010315 100%),linear-gradient(180deg, #000946 0%, #040015 23.93%)',
            }}
          >
            <Header />
            {children}
            <FooterSection />
          </Box>
        </MaterialProvider>
      </body>
    </html>
  )
}
