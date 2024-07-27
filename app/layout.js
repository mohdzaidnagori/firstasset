
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'
import { Providers } from './redux/provider'
import ClientProvider from '../components/clientprovider/ClientProvider'
import Image from 'next/image'







export const metadata = {
  title: 'FIRST/ASSET',
  description: 'Real Estate Website for fractional mandated sole selling and project management',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel='icon' href='favicon.ico' />
      </head>
      <body className='overflow-x-hidden relative'>
        {/* <div className="w-screen h-screen relative bg-[#d8d919] top-0 left-0 flex justify-center items-center">
           <Image src="/main.png" width={700} height={700} alt='maintance' style={{objectFit:'fill'}} />
        </div> */}
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
