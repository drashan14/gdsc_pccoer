import { Box, useColorModeValue, Heading, Text, Stack, Image, Link } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
//import { ExternalLinkIcon } from '@chakra-ui/icons'
const IMAGE ='./Event1.jpeg';

export default function ProductSimple() {
    return (
        <div>
            <Tabs 
                align='center' 
                variant="soft-rounded" 
                colorScheme="green"
                marginTop={150}
                fontSize={35}
                fontFamily={'sans-serif'}
            >
                <TabList>
                    <Tab>
                        <Link>Past Events</Link>
                    </Tab>
                    <Tab>Upcoming Events</Tab>
                </TabList>

                <TabPanels>
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
                            <Heading fontSize={35} fontFamily={'body'} fontWeight={750} paddingTop={5}>
                                Info Session
                            </Heading>

                            <Text color={'gray.500'} fontSize={20} textTransform={'uppercase'}>
                                Thursday, September 9 2021
                            </Text>
                            <Text>
                                <Link color="teal.500" href="#">Find More</Link>
                            </Text>
                            
                            {/* <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={800} fontSize={'xl'}>
                                    PQR
                                </Text>
                                <Text textDecoration={'line-through'} color={'gray.600'}>
                                    $199
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