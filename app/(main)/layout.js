import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default layout