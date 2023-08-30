
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
import { Providers } from './redux/provider'
import ClientProvider from '../components/clientprovider/ClientProvider'







export const metadata = {
  title: 'First Asset',
  description: 'Real Estate Website for fractional mandated sole selling and project management',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className='bg-white overflow-x-hidden relative'>
        <ClientProvider>
          <Providers>
            <Toaster />
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </ClientProvider>
      </body>
    </html>
  )
}
