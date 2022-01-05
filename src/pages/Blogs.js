import { Box, Text, SimpleGrid, Container } from '@chakra-ui/react';
import BlogCard from '../components/Events&Blogs/BlogCard'
import Footer from '../components/Footer';
import IMAGE1 from '../assets/images/GDSC LOGO.jpeg';
import IMAGE2 from '../assets/images/Google-Cloud-Logo.png';

export default function Blogs() {
    return (
        <div style={
            {
                overflow: 'hidden'
            }
        }>
            <Box
                w="100%"
                h="200px"
                bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                pos={'relative'}
            >
                <Text
                    marginTop={"80px"}
                    textAlign={'center'}
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize={'calc(40px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'}
                    fontWeight="extrabold"
                    padding={["25px","50px"]}
                    pos={'relative'}
                >
                    Have you read our blogs?
                </Text>
            </Box>
            <Container maxWidth="9xl" overflow={'hidden'} paddingBottom={'100px'} >
                <SimpleGrid
                    columns={[1, 2, 2]}
                    spacing={0}
                    mx="auto"
                    my={10}
                    justifyContent={'space-evenly'}
                    maxHeight='100%'
                    maxWidth='80%'
                    overflow={'hidden'}
                >
                    <BlogCard BlogImage={IMAGE2} BlogName="Things You must know before starting 30 days of Google Cloud" Author="Shivam Barke" BlogLink="https://medium.com/@sbarke236/things-you-must-know-before-starting-30-days-of-google-cloud-8aa217de51d" />
                    <BlogCard BlogImage={IMAGE1} BlogName="INFO SESSION : GDSC PCCOER" Author="Shivam Barke" BlogLink="https://medium.com/@sbarke236/lively-info-session-55890419c8ee"/>
                    <BlogCard BlogImage={IMAGE1} BlogName="What is GDSC?" Author="Vishakha Badgujar" BlogLink="https://medium.com/@badgujarvishakha/what-is-gdsc-6fcf78e34421"/>
                </SimpleGrid>
            </Container>
            <Footer />
        </div>
    )
}