import { MaterialProvider } from '@/provider/material/MaterialProvider'
import { Box } from '@mui/material'
import type { Metadata } from 'next'
import { Poppins, Syncopate } from 'next/font/google'
import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'
import '../../public/assets/global.css'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const syncopate = Syncopate({
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
    <html lang="en" className={`${(poppins.className, syncopate.className)}`}>
      <body>
        <MaterialProvider deviceType={UAParser(headersList.get('user-agent') || '')?.device.type || 'desktop'}>
          <Box
            sx={{
              minHeight: '100dvh',
              background:
                'linear-gradient(180deg, #010226 0%, #010315 100%),linear-gradient(180deg, #000946 0%, #040015 23.93%)',
            }}
          >
            {children}
          </Box>
        </MaterialProvider>
      </body>
    </html>
  )
}
