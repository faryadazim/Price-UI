'use client'; 
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { createStandaloneToast } from '@chakra-ui/toast'

import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";

export default function Home() {

  const { ToastContainer, toast } = createStandaloneToast()


  return (
    <main  >



      < Box  className={styles.backgroundColor} h='50vh'>
        
          <h1 onClick={() => toast({ title: 'Chakra UI' })}   >
            Simple pricing for your business
          </h1>
          {/* <ToastContainer /> */}
          <p>
            Plans that are carefully crafted to suit your business.
          </p>
      </Box>

    </main>
  )
}
