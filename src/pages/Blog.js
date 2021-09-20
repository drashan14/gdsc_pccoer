import { Box, Text } from '@chakra-ui/react';
import SingleBlog from '../components/Events&Blogs/SingleBlog';
const IMAGE = 'https://picsum.photos/seed/picsum/900/600';
const DESCRIPTION = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab pariatur debitis sapiente est ex, praesentium aliquam velit distinctio eos illo. Sapiente voluptatem consectetur qui voluptatum est ipsam officia minus incidunt?';

const Blog = (props) => {
    console.log(props);
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
                    textAlign={'center'}
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize={'calc(40px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))'}
                    fontWeight="extrabold"
                    padding={"100px 0"}
                    pos={'relative'}
                >
                    Blog
                </Text>
            </Box>
            <SingleBlog BlogImage={IMAGE} BlogName="ABC" Author="PQR" BlogDescription={DESCRIPTION} />
        </div>
    )
}

export default Blog;