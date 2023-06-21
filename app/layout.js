
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
import { Providers } from './redux/provider'
import { Suspense } from 'react'




export const metadata = {
  title: 'First Asset',
  description: 'Real Estate Website for fractional sole selling and project managment',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className='bg-white overflow-x-hidden'>
        <Providers>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
