import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'

// import '../scss/style.scss'
import '@/assets/style.scss'
import BootstrapClient from '@/components/BootstrapClient'
// import './globals.css';
import ReactQueryProvider from '@/providers/ReactQueryProvider'
import 'bootstrap/dist/css/bootstrap.min.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: 'My Body Dashboard',
  description: 'My Body Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        <ReactQueryProvider>
          <div>{children}</div>
        </ReactQueryProvider>
        <BootstrapClient />
      </body>
    </html>
  )
}
