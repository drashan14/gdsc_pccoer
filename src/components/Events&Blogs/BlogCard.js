import { Box, SimpleGrid, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Center, Container, Text } from '@chakra-ui/layout'

export default function BlogCard({ BlogImage, BlogName, Author, BlogLink }) {
    return (
        <Container rounded="lg" boxShadow="lg" overflow={'hidden'} maxW="4xl">
            <SimpleGrid>
                <LinkBox maxW="3xl" rounded="md">
                    <Box p={4} display={{ lg: "flex" }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ lg: 200 }}
                                src={BlogImage}
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} paddingTop={'10%'}>
                            <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="4xl"
                                letterSpacing="wide"
                                color="teal.600"
                            >
                                <LinkOverlay href={BlogLink}>
                                    {BlogName}
                                </LinkOverlay>
                            </Text>
                            <Text color={'gray.500'} fontSize={20} textTransform={'capitalize'}>
                                {Author}
                            </Text>
                            <Text mt={2} color="gray.500" fontSize={12}>
                                
                            </Text>
                        </Box>
                    </Box>
                </LinkBox>
            </SimpleGrid>
        </Container>
    )
}