'use client';
import styles from './page.module.css'
import { Card, CardBody, Heading, Button, Box, Text, Flex, Center, Grid, GridItem } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
export default function Home() {



  return (
    <main  >
      < Box bg="#6B46C1" h={['32vh', '48vh']}>
        <Center>
          <Heading as='h3' color='white' fontSize={{ md: 40, lg: 45, xl: 48 }} mt='20'   >
            Simple pricing for your business
          </Heading>
        </Center>
        <Center>
          <Text as='p' mt='3' fontSize={{ md: 20, lg: 22, xl: 24 }} color='white' >
            Plans that are carefully crafted to suit your business.
          </Text>
        </Center>
      </Box>
      < Box textAlign="center" >
        <Flex justifyContent="center" style={{ zIndex: 455 }} mt="-8%">
          <center>  </center>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            // height="300px"
            width={{base:"90%" , md: "85%", lg: "70%", xl: "65%" }}
            boxShadow='xl'
            borderRadius='12px'
          >

            <Grid templateColumns='repeat(6, 1fr)' gap={6} width="100%">
              <GridItem colSpan={{  base:6, md: 6, lg: 2 }} p={{ md: 8, lg: 8, xl: 10 }} alignContent="center" bgColor='rgba(101, 44, 211, 0.1)'>
                <Text as='p' fontSize={{ base: '16px', md: '18px', lg: '20px', xl: '24px' }} fontWeight='700' mt='1'>
                  Premium Pro  </Text>
                <Text as='h2' fontSize={{ base: '35px', md: '40', lg: '45px', xl: '60px' }} fontWeight='700' >
                  $329
                </Text>        <Text as='p'  >

                  Billed Just Once  </Text>
                <Button variant='solid' py={{ base: 3, md: 4, lg: 5, xl: 6 }} width='90%' mt='5' bgColor='#805AD5' color=' #F7FAFC'  >
                  Get Started
                </Button>
              </GridItem>
              <GridItem colSpan={{ base:6,md: 6, lg: 4 }} px='10' py={{ md: 2, lg: 3, xl: 5 }}  >
                <CardBody>
                  <Box textAlign='left' fontSize={{ md: 15, lg: 16, xl: 18 }} fontWeight={400}>Access these features when you get this pricing package for your business.</Box>
                  <Flex textAlign='left' mt={{ md: 5, lg: 4, xl: 5 }} fontSize={{ md: 14, lg: 15, xl: 17 }} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'> International calling and messaging API</Text> </Flex>
                  <Flex textAlign='left' mt={{ md: 2, lg: 2, xl: 3 }} fontSize={{ md: 14, lg: 15, xl: 17 }} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'> Additional phone numbers</Text> </Flex>
                  <Flex textAlign='left' mt={{ md: 2, lg: 2, xl: 3 }} fontSize={{ md: 14, lg: 15, xl: 17 }} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'>Automated messages via Zapier</Text> </Flex>
                  <Flex textAlign='left' mt={{ md: 2, lg: 2, xl: 3 }} fontSize={{ md: 14, lg: 15, xl: 17 }} fontWeight={400}>  <CheckCircleIcon w={5} h={5} color="#6134C4" mt='0.5' /><Text as='p' pl='3'> 24/7 support and consulting</Text> </Flex>
                </CardBody>

              </GridItem>
            </Grid>




          </Card>

        </Flex>
        {/* <Flex justifyContent="center" style={{ zIndex: 455 }} mt="-125"> */}
        <Box width={{ base: '90% ', md: "80%", lg: '70%', xl: "65%" }} mx='auto' mt='10'>
          <Grid templateColumns="repeat(6, 1fr)" gap={{ md: '4', lg: '6' }}>
            <GridItem colSpan={{base:6, md: 6, lg: 2 }}>
              <Flex px={{ base: 0, md: 0, lg: 8, xl: 12 }} py={{base:"12px"}}>

                <Box
                  as="svg"
                  viewBox="0 0 46 46"
                  fill="none"
                  h={{ base: "10", md: "25", lg: "51" }}  >
                  <path
                    d="M23 11L26.09 17.262L33 18.266L28 23.14L29.18 30.022L23 26.772L16.82 30.022L18 23.14L13 18.266L19.91 17.262L23 11Z"
                    fill="#652CD3"
                  />
                  <path
                    d="M23 43C23 43 3 35 3 9L23 3L43 9C43 35 23 43 23 43Z"
                    stroke="#CBD5E0"
                    strokeWidth="4.8"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    fill="none"
                  />
                </Box>

                <Text as='p' textAlign='left' pl='5' pt='1 ' fontSize={{ base: '13px', md: '15', lg: '16px' }} fontWeight='700' > 30 days money back Guarantee</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={{base:6, md: 6, lg: 2 }}>
              <Flex px={{ base: 0, md: 0, lg: 8, xl: 10 }} py={{base:"12px"}}>

                <Box
                  as="svg"
                  viewBox="0 0 40 40"
                  fill="none"

                  h={{ base: "10", md: "25", lg: "50" }}
                >
                  <path d="M2.37256 24.4434L6.37256 37.1384C6.43786 37.3473 6.54396 37.5412 6.68471 37.7088C6.82547 37.8765 6.99808 38.0145 7.19256 38.115C9.5607 39.3452 12.1906 39.9861 14.8592 39.9834C15.7926 39.9741 16.7236 39.8872 17.6426 39.7234L2.37256 24.4434Z" fill="#D1D5DB" />
                  <path
                    d="M39.5112 22.155L17.8445 0.488333C17.532 0.175751 17.1082 9.43957e-05 16.6662 0C12.2474 0.00485266 8.01098 1.76236 4.88642 4.88691C1.76187 8.01147 0.00436438 12.2479 -0.000488281 16.6667C-0.000393886 17.1087 0.175263 17.5325 0.487845 17.845L22.1545 39.5117C22.467 39.8242 22.8909 39.9999 23.3328 40C27.7516 39.9951 31.988 38.2376 35.1126 35.1131C38.2372 31.9885 39.9947 27.7521 39.9995 23.3333C39.9994 22.8913 39.8238 22.4675 39.5112 22.155ZM11.6662 15C11.0069 15 10.3624 14.8045 9.81428 14.4382C9.26611 14.072 8.83887 13.5514 8.58658 12.9423C8.33429 12.3332 8.26828 11.663 8.39689 11.0164C8.52551 10.3698 8.84298 9.77582 9.30916 9.30964C9.77533 8.84347 10.3693 8.526 11.0159 8.39738C11.6625 8.26876 12.3327 8.33478 12.9418 8.58707C13.5509 8.83936 14.0715 9.2666 14.4377 9.81477C14.804 10.3629 14.9995 11.0074 14.9995 11.6667C14.9995 12.5507 14.6483 13.3986 14.0232 14.0237C13.3981 14.6488 12.5502 15 11.6662 15ZM26.3328 26.3333L24.9345 30.8333L22.2128 26.985L17.4995 27.045L20.3195 23.2667L18.8062 18.805L23.2695 20.3183L27.0478 17.5L26.9878 22.2133L30.8328 24.935L26.3328 26.3333Z"
                    fill="#652CD3"
                  />
                </Box>

                <Text as='p' textAlign='left' pl='5' fontSize={{ base: '13px', md: '15', lg: '16px' }} fontWeight='700' >
                  30 days money back Guarantee</Text>
              </Flex>
            </GridItem >
            <GridItem colSpan={{ base:6, md: 6, lg: 2 }}>
              <Flex pr={{ base: 0, md: 4, lg: 4, xl: 9 }} py={{base:"12px"}} justifyContent='start' >
                <Box
                  as="svg"
                  viewBox="0 0 40 42"
                  fill="none"
                  height={{ base: "10", md: "25", lg: "53" }}
                >
                  <path
                    d="M30.6314 33.7154L33.2841 36.2009C36.3532 32.9245 36.6587 32.4773 38.6114 28.4518L35.3405 26.8645C33.5532 30.5464 33.4314 30.7245 30.6314 33.7154Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M18.5928 37.5174L18.6819 41.1519C23.4365 41.0356 24.1947 40.8901 28.6056 39.2828L27.3601 35.8665C23.3401 37.3301 22.9492 37.4101 18.5928 37.5174Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M7.05381 31.2517L4.45563 33.7954C7.79563 37.2045 8.45381 37.6917 12.7393 39.8317L14.3665 36.579C10.4756 34.6372 10.1065 34.3717 7.05381 31.2517Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M3.63545 19.2954H-0.000915527C-0.000915527 23.8827 0.0972662 24.5009 1.47181 28.8409L4.93727 27.7427C3.67908 23.77 3.63545 23.4791 3.63545 19.2954Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M10.1273 8.08272C12.9582 5.93181 16.3836 4.74999 20 4.74999C29.0236 4.74999 36.3636 12.09 36.3636 21.1136C36.3636 21.49 36.3327 21.8573 36.3073 22.2264L39.9145 22.79C39.9618 22.2354 40 21.6791 40 21.1136C40 10.0864 31.0273 1.11363 20 1.11363C15.3727 1.11363 10.9873 2.6809 7.44181 5.55363L2.42363 0.848175L1.24908 14.6373L15.0745 12.7064L10.1273 8.08272Z"
                    fill="#652CD3"
                  />
                </Box>
                <Text as='p' textAlign='left' pl='5' fontSize={{ base: '13px', md: '15', lg: '14px', xl: '16px' }} fontWeight='700' >
                  No monthly subscription Pay once and for all</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Box>

        {/* </Flex> */}
      </Box>
    </main>
  )
}
