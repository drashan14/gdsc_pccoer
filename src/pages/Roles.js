import {
  Box,
  Text,
  SimpleGrid,
  Container,
  HStack,
  Heading,
} from "@chakra-ui/react";
import BlogCard from "../components/Events&Blogs/BlogCard";
import Footer from "../components/Footer";
import IMAGE1 from "../assets/images/GDSC LOGO.jpeg";
import IMAGE2 from "../assets/images/Google-Cloud-Logo.png";
import "../styles/App.css";

export default function Roles() {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Box
        w="100%"
        h="200px"
        bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        pos={"relative"}
      >
        <Text
          marginTop={"80px"}
          textAlign={"center"}
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize={"calc(40px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))"}
          fontWeight="extrabold"
          padding={["25px", "50px"]}
          pos={"relative"}
        >
          GDSC 2.0 RECRUITMENT INFO
        </Text>
      </Box>
      <div class="center" style={{fontSize:"25px",marginLeft:"600px",color:"blue",fontFamily:"sans-serif",fontWeight:"bold"}}>
            <a href="https://linktr.ee/GDSCPCCOER"><font style={{color:"#008B8B",marginRight:"18px"}}>Click Here For More Imformation </font><br/><button class="custom-btn btn-5"style= {{marginLeft:"150px",marginTop:"10px"}}><span style={{color:"white" }}>Read More</span></button>
</a>

        </div>

      <Container className="container" maxWidth="9xl" overflow={"hidden"} paddingBottom={"100px"}>
       
        <div class="center">
          <div class="card">
            <div class="title">
              <h1>Management Team:-</h1>
            </div>
            <div class="content">
            <h3 style={{fontSize:"15px",color:"black"}}>
              • Plan and Manage Events.
              <br />
              • Handle Workshops and Events.
              <br />
              • Manage Documentation and keep track of events.
              <br />
              • Coordinate with other teams.
              <br />
              </h3>
            </div>
            <div class="circle"></div>
          </div>
        </div>
        <div class="center">
          <div class="card">
            <div class="title">
              <h1 style={{color:"#B22222"}}>Technical Team:</h1>
            </div>
            <div class="content">
            <h3 style={{fontSize:"15px",color:"black"}}>
              • Handle Technical Problems.
              <br />
              • Help peers in technical problems.
              <br />
              • Conduct Workshops or study jams.
              <br />
              </h3>
            </div>
            <div class="circle"></div>
          </div>
          </div>
          </Container>
          <Container className="container" maxWidth="9xl" overflow={"hidden"} paddingBottom={"100px"}>
          <div className="center">
          <div class="card">
            <div class="title">
              <h1 style={{ color: "#DAA520",marginLeft:"10px" }}>Marketing and Photography:</h1>
            </div>
            <div class="content">
            <h3 style={{fontSize:"15px",color:"black"}}>
              • Publicity of events/workshops/sessions.
              <br />
              • Create awareness about GDSC.
              <br />
              • Think Innovative ideas for development of Club.
              <br />
              • Improve Reach of club.
              <br />
              </h3>
            </div>

            <div class="circle"></div>
          </div>
        </div>
      


      {/* <Container className="container" maxWidth="9xl" overflow={"hidden"} paddingBottom={"100px"}> */}
        <div class="center">
          <div class="card">
            <div class="title">
              <h1 style={{color:"#008B8B"}}>Social Media & Design:</h1>
            </div>
            <div class="content">
                <h3 style={{fontSize:"15px",color:"black"}}>
              • Design Posts for Social media handle.
              <br />
              • Design Posters, banners etc. for events.
              <br />
              • Design and create Reels.
              <br />
              • Handle Social Media Accounts and keeping 
              <br/> them active.
              <br />
              </h3>
            </div>
            <div class="circle"></div>
          </div>
        </div>
        </Container>
        <Container className="container" maxWidth="9xl" overflow={"hidden"} paddingBottom={"100px"}>
        <div class="center">
          <div class="card">
            <div class="title">
              <h1 style={{color:"#008B8B"}}>Editorial and Content Team:</h1>
            </div>
            <div class="content">
                <h3 style={{fontSize:"15px",color:"black"}}>
              • Curating message for social media posts and discord.
              <br />
              • Curating new ideas for getting more engagement <br/>on social media.
              <br />
              • Creating Newsletters for GDSCPCCOER Medium Page.
              <br />
              </h3>
            </div>
            <div class="circle"></div>
          </div>
          </div>
          <div className="center">
          <div class="card">
            <div class="title">
              <h1 style={{color:"#800080"}}>Competitive Programming:</h1>
            </div>
            <div class="content" >
              <h3 style={{fontSize:"15px",color:"black"}}>
               
                  • Develop programming culture in college.
                  <br />
                  • Improve the team and host Study jams.
                  <br />
                  • Help new programmers.
                  <br />
                  • Take part in competitions and hackathons.
                  <br />
                
              </h3>
            </div>

            <div class="circle"></div>
          </div>
        </div>
      </Container>
      <Container className="container" maxWidth="9xl" overflow={"hidden"} paddingBottom={"100px"}>
        <div class="center">
          <div class="card">
            <div class="title">
              <h1 style={{color:"#B22222"}}>Project Management:-</h1>
            </div>
            <div class="content">
            <h3 style={{fontSize:"15px",color:"black"}}>
              • Team for Solution Challenge
              <br />
              • Contribute in Project and share ideas
              <br />
              </h3>
            </div>
            <div class="circle"></div>
          </div>
        </div>
        <div class="center">
          <div class="card">
            <div class="title">
              <h1>Domain Heads:</h1>
            </div>
            <div class="content">
            <h3 style={{fontSize:"15px",color:"black"}}>
              • Have Knowledge of their respective field.
              <br />
              • Conduct workshop and study jams.
              <br />
              • Help peers in their respective field.
              <br />
              </h3>
            </div>
            <div class="circle"></div>
          </div>
          </div>
          </Container>
          <Container className="container" maxWidth="9xl" overflow={"hidden"} paddingBottom={"100px"}>
          <div className="center">
          <div class="card">
            <div class="title">
              <h1 style={{color:"#DAA520"}}>Accounts:</h1>
            </div>
            <div class="content">
            <h3 style={{fontSize:"15px",color:"black"}}>
              • Handle account of GDSC.
              <br />
              • Keep track of every expenses.
              <br />
              • Maintain Books.
              <br />
              </h3>
            </div>

            <div class="circle"></div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
