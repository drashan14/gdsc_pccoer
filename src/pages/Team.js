import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import TeamCard from '../components/TeamCard'
import Teams from '../components/Teams'

import Footer from '../components/Footer';

export default function Team() {
    return (
        <div>

{/* <SimpleGrid columns={[1,2,3]} spacing={12} mx="auto" my={0} maxW="900px">
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
</SimpleGrid> */}

<Teams name="core" teamNumber="1"/>
<Teams name="management + operations" teamNumber="2"/>
<Teams name="marketing + social media" teamNumber="3"/>
<Teams name="Design " teamNumber="4"/>
<Teams name="editorial" teamNumber="5"/>
<Teams name=" frontend" teamNumber="6"/>
<Teams name="Backend" teamNumber="7"/>
<Teams name="android" teamNumber="8"/>
<Teams name="flutter" teamNumber="9"/>
<Teams name="cloud" teamNumber="10"/>
<Teams name="ML" teamNumber="11"/>
<Footer/>
        </div>
    )
}


//  management + operations
//  marketing + social media
//  design
//  editorial
//  frontend 
//  Backend 
//  android 
//  flutter
//  cloud
//  ML
