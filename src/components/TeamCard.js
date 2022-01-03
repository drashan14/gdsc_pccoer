import { Center, Divider, Text } from '@chakra-ui/layout'
import { Avatar, VStack,AspectRatio,HStack } from "@chakra-ui/react"
import {FaGithub, FaInstagram, FaTwitter,FaLinkedinIn} from "react-icons/fa"


import React from 'react'


export default function TeamCard({name, position, github, instagram, twitter,linkedin,image}) {

    


    return (
        <AspectRatio maxH="360px" ratio={2 / 3} >
        <Center rounded="lg" boxShadow="lg">
        <VStack>
        <Avatar size="2xl" src={image} name={name}/>
        <Text fontSize="xl"> {name} </Text>
        <Divider/>
        <Text fontSize="lg" fontWeight="light" p={1}> {position} </Text>

        <HStack>
        
        {github.length!=0 && <a href={github}><FaGithub/></a>}
        {instagram.length!=0 && <a href={instagram} ><FaInstagram/></a>}
        {twitter.length!=0 && <a href={twitter}><FaTwitter/></a>}
        {linkedin.length!=0 && <a href={linkedin}><FaLinkedinIn/></a>}

        </HStack>
        
        </VStack>

            
        </Center>
        </AspectRatio>
        
    )
}
