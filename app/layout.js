import './globals.css'


export const metadata = {
  title: 'First Asset',
  description: 'Real Estate Website for fractional sole selling and project managment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-white overflow-x-hidden'>
        {children}
      </body>
    </html>
  )
}
