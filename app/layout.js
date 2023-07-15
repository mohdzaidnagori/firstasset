
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
import { Providers } from './redux/provider'
import Alert from '../components/alert/Alert'
import ClientProvider from '../components/clientprovider/ClientProvider'







export const metadata = {
  title: 'First Asset',
  description: 'Real Estate Website for fractional sole selling and project managment',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className='bg-white overflow-x-hidden relative'>
        <ClientProvider>
          <Providers>
            <Toaster />
            <Navbar />
            <Alert />
            {children}
            <Footer />
          </Providers>
        </ClientProvider>
      </body>
    </html>
  )
}
