import { Box, Text, SimpleGrid, Container } from '@chakra-ui/react';
import BlogCard from '../components/Events&Blogs/BlogCard'
import Footer from '../components/Footer';
const IMAGE ='https://picsum.photos/seed/picsum/300/300';

export default function Blogs() {
    return (
        <div style={
            {
                overflow:'hidden'
            }
        }>
            <Box
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
                    padding={"100px 0"}
                    pos={'relative'}
                >
                    Have you read our blogs?
                </Text>
            </Box>
            <Container maxWidth="7xl" overflow={'hidden'} >
                <SimpleGrid 
                    columns={[1,2,2]} 
                    spacing={5} 
                    mx="auto" 
                    my={10} 
                    justifyContent={'space-evenly'} 
                    maxHeight='100%' 
                    maxWidth='100%' 
                    overflow={'hidden'}
                >
                    <BlogCard BlogImage={IMAGE} BlogName="ABC" Author="PQR" />
                    <BlogCard BlogImage={IMAGE} BlogName="ABC" Author="PQR" />
                    <BlogCard BlogImage={IMAGE} BlogName="ABC" Author="PQR" />
                </SimpleGrid>
            </Container>
            <Footer />
        </div>
    )
}