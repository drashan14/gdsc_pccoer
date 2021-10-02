import { Box, SimpleGrid, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Container, Text } from '@chakra-ui/layout'

export default function BlogCard({ BlogImage, BlogName, Author }) {
    return (
        <Container rounded="lg" boxShadow="lg" overflow={'hidden'} maxW="3xl">
            <SimpleGrid>
                <LinkBox maxW="2xl" rounded="md">
                    <Box p={4} display={{ lg: "flex" }}>
                        <Box flexShrink={0}>
                            <Image
                                borderRadius="lg"
                                width={{ lg: 250 }}
                                src={BlogImage}
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                fontWeight="bold"
                                textTransform="uppercase"
                                fontSize="2xl"
                                letterSpacing="wide"
                                color="teal.600"
                            >
                                <LinkOverlay href="/Blog">
                                    {BlogName}
                                </LinkOverlay>
                            </Text>
                            <Text color={'gray.500'} fontSize={20} textTransform={'uppercase'}>
                                {Author}
                            </Text>
                            <Text mt={2} color="gray.500" fontSize={12}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga.
                            </Text>
                        </Box>
                    </Box>
                </LinkBox>
            </SimpleGrid>
        </Container>
    )
}