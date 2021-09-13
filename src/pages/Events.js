import { Box, useColorModeValue, Heading, Text, Stack, Image, Link } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
const IMAGE ='./Event1.jpeg';

export default function ProductSimple() {
    return (
        <div style={
            {
                overflow:'hidden'
            }
        }>
            <Box
                marginTop={100}
                w="100%"
                h="200px"
                bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                pos={'relative'}
            >
                <Text
                    textAlign={'center'}
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize={'calc(40px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'}
                    fontWeight="extrabold"
                    padding={"50px 0"}
                    pos={'relative'}
                >
                    Welcome to Events Page
                </Text>
            </Box>
            
            <Tabs 
                align='center' 
                variant="soft-rounded" 
                colorScheme="green"
                marginTop={5}
                fontSize={35}
                fontFamily={'sans-serif'}
            >
                <TabList>
                    <Tab>
                        <Link>Past Events</Link>
                    </Tab>
                    <Tab>Upcoming Events</Tab>
                </TabList>

                <TabPanels margin={'auto'}>
                    <TabPanel>
                    <p>Past Events!</p>
                        <Box
                            
                            marginTop={30}
                            role={'group'}
                            maxW={'380px'}
                            bg={useColorModeValue('white', 'gray.800')}
                            boxShadow={'2xl'}
                            rounded={'lg'}
                            pos={'relative'}
                            align={'center'}
                        >

                            <Box
                                pos={'relative'}
                                height={'300px'}
                                _after={{
                                    pos: 'absolute',
                                    top: 5,
                                    left: 0,
                                    backgroundImage: `url(${IMAGE})`,
                                    filter: 'blur(15px)',
                                    zIndex: -1,
                                }}
                            >
                                <Image
                                    rounded={'lg'}
                                    marginTop={25}
                                    align={'center'}
                                    src={IMAGE}
                                />
                            </Box>
                            <Stack align={'center'} paddingTop={70}>
                                <Heading fontSize={35} fontFamily={'body'} fontWeight={750} paddingTop={4}>
                                    Info Session
                                </Heading>

                                <Text color={'gray.500'} fontSize={20} textTransform={'uppercase'}>
                                    Thursday, September 9 2021
                                </Text>
                                
                                <Text>
                                    <Link color="teal.500" href='#'>Find More</Link>
                                </Text>
                                
                                {/* <Stack direction={'row'} align={'center'}>
                                    <Text fontWeight={800} fontSize={'xl'}>
                                        PQR
                                    </Text>
                                </Stack> */}
                            </Stack>
                        </Box>
                </TabPanel>
                    <TabPanel>
                    <p>Upcoming Events!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs> 
        </div> 
    );
}