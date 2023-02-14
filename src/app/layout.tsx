'use client';
import './globals.css' 


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <head />
     
      <body>
      <ChakraProvider>
      {children}
    </ChakraProvider>
</body>
    </html>
  )
}
