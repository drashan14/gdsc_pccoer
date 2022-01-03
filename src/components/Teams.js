import React, { useState } from 'react'
import TeamCard from './TeamCard'
import { SimpleGrid, Box , Text ,Button} from '@chakra-ui/react'
import { Center,Divider } from '@chakra-ui/layout'
import * as hD from '../data/headDetails'
import * as mD from '../data/memberDetails'



export default function Teams({name,teamNumber}) {


  const [fullView,setFullView] = useState(false);


  function handleClick(){
       if (fullView == false){
        setFullView(true);
       }
       else{
           setFullView(false)
       }
   };


   function createHead(head){
    return <TeamCard
      image={head.img}
      name={head.name} 
      position={head.position} 
      instagram={head.insta} 
      github={head.github} 
      twitter={head.twitter}
      linkedin={head.linkedin}
      />
  };

   function createMember(member){
     return <TeamCard 
     image={member.img} 
     name={member.name} 
     position={member.position} 
     instagram={member.insta} 
     github={member.github} 
     twitter={member.twitter}
     linkedin={member.linkedin}
     />
   };


   let hTeam = []
   let mTeam = []

   switch(teamNumber){
    case "1":
      hTeam = hD.default
      mTeam = mD.default
      break;
    case "2":
      hTeam = hD.manOpHdetails
      mTeam = mD.manOpMdetails
      break;
    case "3":
      hTeam = hD.socialMarkHdetails
      mTeam = mD.socialMarkMdetails
      break;
    case "4":
      hTeam = hD.designHdetails
      mTeam = mD.designMdetails
      break;
    case "5":
      hTeam = hD.editorialHdetails
      mTeam = mD.editorialMdetails
      break;
    case "6":
      hTeam = hD.frontHdetails
      mTeam = mD.frontMdetails
      break;
    case "7":
      hTeam = hD.backHdetails
      mTeam = mD.backMdetails
      break;
    case "8":
      hTeam = hD.androHdetails
      mTeam = mD.androMdetails
      break;
    case "9":
      hTeam = hD.flutterHdetails
      mTeam = mD.flutterMdetails
      break;
    case "10":
      hTeam = hD.cloudHdetails
      mTeam = mD.cloudMdetails
      break;
    case "11":
      hTeam = hD.MLHdetails
      mTeam = mD.MLMdetails
      break;
     default:
       hTeam = []
       mTeam = []
   }
  
   const lenM = mTeam.length


return (

<div>

<Center my={50} fontSize="5xl" className="Title">{name}</Center>

<SimpleGrid columns={[1,2,3]} spacing={12} mx="auto" my={0} maxW="900px">


  {hTeam.map(createHead)}

</SimpleGrid>

<Box display={!fullView && "none"} >

  <SimpleGrid columns={[1,2,3]} spacing={12} mx="auto" my={0} maxW="900px">


    {mTeam.map(createMember)}

  </SimpleGrid>

</Box>

<Center> 
  <Button my={20} display={lenM==0 && "none"} colorScheme="blue" className="button" onClick={handleClick}>{fullView? "show less" : "show more"}</Button>
</Center>

</div>
    )
}

// take numbers as a prop and use switch case to identify the array from which people are to be considered

/* <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/>
  <TeamCard name="Doug Judy" position="potniac Bandit" github="https://github.com/shreerang6921" instagram="https://www.instagram.com/_broken.humor_/"/> */