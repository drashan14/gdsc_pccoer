import { Box, useColorModeValue, Heading, Stack, Image, Link, Button } from '@chakra-ui/react';
import {Container, Text } from '@chakra-ui/layout'

export default function EventCard({EventImage, EventName, Date, CommunityLink }) {
    return (
        <Container rounded="lg" boxShadow="lg" overflow={'hidden'}>
            <Box
                marginTop={30}
                marginBottom={30}
                role={'group'}
                maxW={'380px'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'xl'}
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
                    <Heading color={'black'} fontSize={'5xl'} fontFamily={'body'} fontWeight={500}>
                        {EventName}
                    </Heading>
                    <Box padding={2}>
                        <Text color={'gray.500'} fontSize={20} textTransform={'uppercase'}>
                            {Date}
                        </Text>
                    </Box>
                    
                    <Stack flex={1} alignItems={'center'} justifyContent={'center'} pos='relative' direction='row' spacing={10}>
                        <Link href="/blogs">
                            <Button colorScheme="teal" variant="solid" size="lg" >
                                Read More On Blog
                            </Button>
                        </Link>
                        <Link href={CommunityLink}>
                            <Button colorScheme="teal" variant="solid" size="lg" >
                                Community Page
                            </Button>
                        </Link>
                    </Stack>
                </Box>

            </Box>
        </Container>
    )
}
