import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import TeamCard from '../components/TeamCard'


export default function Team() {
    return (
        <div>

<SimpleGrid columns={[1,2,3]} spacing={12} mx="auto" my={0} maxW="900px">
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
</SimpleGrid>
          
        </div>
    )
}
