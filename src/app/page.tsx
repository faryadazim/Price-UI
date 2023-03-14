'use client';
import styles from './page.module.css'
import { Card, CardBody, Heading, Button, Box, Text, Flex, Center, Grid } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
export default function Home() {



  return (
    <main  >
      < Box bg="#6B46C1" h={['32vh', '48vh']}>
        <Center>
          <Heading as='h3' color='white' fontSize='48px' mt='20'   >
            Simple pricing for your business
          </Heading>
        </Center>
        <Center>
          <Text as='p' mt='3' fontSize='24px' color='white' >
            Plans that are carefully crafted to suit your business.
          </Text>
        </Center>
      </Box>
      < Box textAlign="center" >
      <Flex justifyContent="center" style={{ zIndex: 455 }} mt={[-100, -125]}>
  <center> </center>
  <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    height={{ base: 'auto', sm: '300px' }}
    width={{ base: '100%', sm: '65%' }}
    boxShadow='xl'
    borderRadius='12px'
  >
    <Box width={{ base: '100%', sm: '38%' }} p={['5', '10']} alignContent="center" bgColor='rgba(101, 44, 211, 0.1)'>
      <Text as='p' fontSize={['18px', '24px']} fontWeight='700' mt='1'>
        Premium Pro
      </Text>
      <Text as='h2' fontSize={['40px', '60px']} fontWeight='700'>
        $329
      </Text>
      <Text as='p' style={{}}>
        Billed Just Once
      </Text>
      <Button variant='solid' py='6' width='90%' mt='5' bgColor='#805AD5' color=' #F7FAFC'  >
        Get Started
      </Button>
    </Box>
    <Box width={{ base: '100%', sm: '62%' }} px={['5', '10']} py={['2', '5']}>
      <CardBody>
        <Box textAlign='left' fontSize={['16px', '18px']} fontWeight={400}>Access these features when you get this pricing package for your business.</Box>
        <Flex textAlign='left' mt='5' fontSize={['15px', '17px']} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'> International calling and messaging API</Text> </Flex>
        <Flex textAlign='left' mt='3' fontSize={['15px', '17px']} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'> Additional phone numbers</Text> </Flex>
        <Flex textAlign='left' mt='3' fontSize={['15px', '17px']} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'>Automated messages via Zapier</Text> </Flex>
        <Flex textAlign='left' mt='3' fontSize={['15px', '17px']} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'> 24/7 support and consulting</Text> </Flex>
      </CardBody>
    </Box>
  </Card>
</Flex>
        {/* <Flex justifyContent="center" style={{ zIndex: 455 }} mt="-125"> */}
        <Box width={['100%', '90%', '80%', '65%']} mx='auto' mt='10'>
          <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={6}>
            <Flex px={['0', '12']} justifyContent='center' alignItems='center'>

              <svg width="53" height="53" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 11L26.09 17.262L33 18.266L28 23.14L29.18 30.022L23 26.772L16.82 30.022L18 23.14L13 18.266L19.91 17.262L23 11Z" fill="#652CD3"></path><path d="M23 43C23 43 3 35 3 9L23 3L43 9C43 35 23 43 23 43Z" stroke="#CBD5E0" stroke-width="4.8" stroke-miterlimit="10" stroke-linecap="square"></path></svg>

              <Text as='p' textAlign={['center', 'left']} pl={['0', '5']} pt={['3', '1']} fontSize={['14px', '16px']} fontWeight='700'>30 days money back Guarantee</Text>
            </Flex>
            <Flex px={['0', '10']} justifyContent='center' alignItems='center'>
              <svg width="53" height="53" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 11L26.09 17.262L33 18.266L28 23.14L29.18 30.022L23 26.772L16.82 30.022L18 23.14L13 18.266L19.91 17.262L23 11Z" fill="#652CD3"></path><path d="M23 43C23 43 3 35 3 9L23 3L43 9C43 35 23 43 23 43Z" stroke="#CBD5E0" stroke-width="4.8" stroke-miterlimit="10" stroke-linecap="square"></path></svg>

              <Text as='p' textAlign={['center', 'left']} pl={['0', '5']} fontSize={['14px', '16px']} fontWeight='700'>30 days money back Guarantee</Text>
            </Flex>
            <Flex px={['0', '12']} justifyContent='center' alignItems='center'>
              <svg width="53" height="53" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 11L26.09 17.262L33 18.266L28 23.14L29.18 30.022L23 26.772L16.82 30.022L18 23.14L13 18.266L19.91 17.262L23 11Z" fill="#652CD3"></path><path d="M23 43C23 43 3 35 3 9L23 3L43 9C43 35 23 43 23 43Z" stroke="#CBD5E0" stroke-width="4.8" stroke-miterlimit="10" stroke-linecap="square"></path></svg>
              <Text as='p' textAlign={['center', 'left']} pl={['0', '5']} fontSize={['14px', '16px']} fontWeight='700'>No monthly subscription Pay once and for all</Text>
            </Flex>
          </Grid>
        </Box>

        {/* </Flex> */}
      </Box>
    </main>
  )
}


