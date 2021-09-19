import React, { useState } from 'react'
import TeamCard from './TeamCard'
import { SimpleGrid, Box , Text ,Button} from '@chakra-ui/react'
import { Center,Divider } from '@chakra-ui/layout'


export default function Teams({name}) {


    const [fullView,setFullView] = useState(false)

   function handleClick(){
       if (fullView == false){
        setFullView(true);
       }
       else{
           setFullView(false)
       }
   }

    return (
        <div>

<Center my={30} fontSize="5xl" className="Title">{name}</Center>

<SimpleGrid columns={[1,2,3]} spacing={12} mx="auto" my={0} maxW="900px">
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  </SimpleGrid>
<Box display={!fullView && "none"} >
  <SimpleGrid columns={[1,2,3]} spacing={12} mx="auto" my={0} maxW="900px">
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
</SimpleGrid>
</Box>
  <Center> 
  <Button my={20} colorScheme="blue" className="button" onClick={handleClick}>{fullView? "show less" : "show more"}</Button>
  </Center>

        </div>
    )
}
