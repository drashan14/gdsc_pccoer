import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HStack } from "@chakra-ui/react"

const FooterStyle = styled.div`
  background-color: #181721;
  padding-top: 5rem;
  padding-bottom: 2rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-top: 4rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">GDSC PCCOE&R</h1>
                    <PText>
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Quick Links"
                        link={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'Events',
                                path: '/Events',
                            }
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol
                        heading="Contact Info"
                        links={[
                            {
                                title: 'gdscpccoer@gmail.com',
                                path: 'mailto:gdscpccoer@gmail.com',
                            },
                            {
                                title: 'Pune, India',
                                path: 'http://google.com/maps',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <h2 className="heading">Social Links</h2>
                    <HStack align="flex-start" >
                        <a href={'https://www.instagram.com/gdscpccoer/'}><FaInstagram size={'4rem'} /></a>
                        <a href={'https://www.linkedin.com/company/google-developer-student-clubs-pccoer/mycompany/'}><FaLinkedin size={'4rem'} /></a>
                        <a href={'https://twitter.com/gdsc_pccoer'}><FaTwitter size={'4rem'} /></a>
                        <a href={'https://discord.com/invite/uxWVvmhTYr'}><FaDiscord size={'4rem'} /></a>
                    </HStack>

                </div>
            </div>
        </FooterStyle>
    );
}