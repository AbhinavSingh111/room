import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { Children, ReactNode } from 'react'
export const metadata: Metadata = {
  title: "Room",
  description: "Video calling app",
  icons: { icon:'/public/icons/logo.svg'}
};

const Rootlayout = ({children}:{children: ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>{children}</StreamVideoProvider>    
    </main>
  )
}

export default Rootlayout