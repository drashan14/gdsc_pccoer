import { Box, useColorModeValue, Heading, Stack, Image, Link, Button } from '@chakra-ui/react';
import {Container, Text } from '@chakra-ui/layout'

export default function EventCard({EventImage, EventName, Date }) {
    return (
        <Container rounded="lg" boxShadow="lg" overflow={'hidden'}>
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

                <Box pos={'relative'} height={'50%'}>
                    <Image
                        rounded={'lg'}
                        align={'center'}
                        src={EventImage}
                    />
                </Box>

                <Box align={'center'} paddingTop={5} pos={'relative'} overflow={'hidden'}>
                    <Heading fontSize={'4xl'} fontFamily={'body'} fontWeight={500}>
                        {EventName}
                    </Heading>
                    <Box padding={2}>
                        <Text color={'gray.500'} fontSize={20} textTransform={'uppercase'}>
                            {Date}
                        </Text>
                    </Box>
                    <Stack flex={1} alignItems={'center'} justifyContent={'center'} pos='relative' direction='row'>
                        <Link href="/blogs">
                            <Button colorScheme="teal" variant="solid" size="md" >
                                Read More On Blog
                            </Button>
                        </Link>
                        <Link href="https://gdsc.community.dev/events/details/developer-student-clubs-pimpri-chinchwad-college-of-engineering-and-research-pune-presents-google-developer-student-clubs-pccoer-information-session/">
                            <Button colorScheme="teal" variant="solid" size="md" >
                                Community Page
                            </Button>
                        </Link>
                    </Stack>
                </Box>

            </Box>
        </Container>
    )
}
