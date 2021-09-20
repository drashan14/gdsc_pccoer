import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

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
            heading="Important Links"
            link={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Events',
                path: '/Events',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91 9822345806',
                path: 'tel:+91-9822345806',
              },
              {
                title: 'sunstarsolarshoppe@gmail.com',
                path: 'mailto:sunstarsolarshoppe@gmail.com',
              },
              {
                title: 'Pune, India',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/niranjan.kangane/',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com/niranjantogo',
              },
              {
                title: 'Instagram',
                path: 'http://isntagram.com/niranjan.kangane',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyle>
  );
}