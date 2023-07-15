
'use client'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
import { Providers } from './redux/provider'
import Alert from '../components/alert/Alert'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import BackToTop from '../components/BackToTop/BackToTop'






export const metadata = {
  title: 'First Asset',
  description: 'Real Estate Website for fractional sole selling and project managment',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className='bg-white overflow-x-hidden relative'>
        <Providers>
          <Toaster />
          <Navbar />
          <Alert />
          <BackToTop />
          <ProgressBar
            height="2px"
            color="#10b981"
            options={{ showSpinner: true }}
            shallowRouting
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
