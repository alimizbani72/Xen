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
  const headersList = await headers()
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <MaterialProvider deviceType={UAParser(headersList.get('user-agent') || '')?.device.type || 'desktop'}>
          <Box
            sx={{
              minHeight: '100dvh',
              background:
                'linear-gradient(180deg, #010226 0%, #010315 100%),linear-gradient(180deg, #000946 0%, #040015 23.93%)',
            }}
          >
            <Box
              position={'relative'}
              sx={{
                backgroundImage: 'url(/assets/svg/curve-background.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
              }}
            >
              <Header />
              {children}
            </Box>
            <FooterSection />
          </Box>
        </MaterialProvider>
      </body>
    </html>
  )
}
