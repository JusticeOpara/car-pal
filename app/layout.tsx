
import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer } from '../components'
// import { ReduxProvider } from '../redux/provider'


export const metadata: Metadata = {
  title: 'CarPal',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang='en'>
      <body className='relative bg-black text-gray-300 '>
        {/* <ReduxProvider> */}
          <Navbar />
          {children}
          <Footer />

        {/* </ReduxProvider> */}


      </body>
    </html>
  )
}
