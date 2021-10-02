import { Image, AspectRatio } from '@chakra-ui/react';
import { Container, Text } from '@chakra-ui/layout';

export default function SingleBlog({ BlogImage, BlogName, Author, BlogDescription }) {
    return (
        <Container rounded="lg" boxShadow="lg" overflow={'hidden'} maxW="container.lg">
            <div align={'center'}>
                <AspectRatio maxW={[300, 400, 650]} ratio={16 / 9} marginTop={10}>
                    <Image
                        src={BlogImage}
                    />
                </AspectRatio>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="4xl"
                    letterSpacing="wide"
                    color="teal.600"
                >
                    {BlogName}
                </Text>
                <Text color={'gray.500'} fontSize="2xl" textTransform={'uppercase'}>
                    {Author}
                </Text>
                <Text mt={2} color="gray.500" textAlign="justify">
                    {BlogDescription}
                </Text>
            </div>
        </Container>
    )
}

