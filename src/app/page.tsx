'use client';
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { createStandaloneToast } from '@chakra-ui/toast'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Button, Box, Image, Text ,  Flex ,Center } from '@chakra-ui/react'

export default function Home() {

  const { ToastContainer, toast } = createStandaloneToast()


  return (
    <main  >



      < Box className={styles.backgroundColor} h='50vh'>
   <Center>
  <Heading as='h3'   onClick={() => toast({ title: 'Chakra UI' })}  >
       
       
          Simple pricing for your business  
            </Heading>  </Center>
    
        {/* <ToastContainer /> */}
          <Center>  <Text as='p'>
    
          Plans that are carefully crafted to suit your business.
       
        </Text>
   </Center>
        
      </Box>
      < Box h='50vh' textAlign="center">
      <Flex justifyContent="center" style={{zIndex:455}} mt="-125">
        <center>  </center>
        <Card  
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
         height="300px"
          width="65%"
        >
          <Flex width="300px"  alignContent="center">
            <Box>
           Premium Pro
           $329
           Billed Just Once 
           <Button variant='solid' colorScheme='blue'>
                Get Started
              </Button></Box>
          </Flex>

          <Stack>
            <CardBody>
              <Heading size='md'>The perfect latte</Heading>

              <Text py='2'>
                Caffè latte is a coffee beverage of Italian origin made with espresso
                and steamed milk.
              </Text>
            </CardBody>

            <CardFooter>
              
            </CardFooter>
          </Stack>
        </Card>


        </Flex>
      </Box>
    </main>
  )
}
