import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/herologo.png';

const AboutPageStyles = styled.div`
  padding: 3rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }

  .about__heading {
    font-size: 4rem;
    margin-bottom: 3rem;
    text-align: center;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
    span{
      color: white;
    }
  }
  .right {
    img {
      border: 2px solid #181721;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 2.5rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <h2 className="about__heading">GDSC PCCOE&R</h2>
            <div className="about__info">
              <PText>
                Our vision at DSC PCCOE&R is
                <br />
                <span> 'To learn, implement and build solutions that
                 would enable the students to enrich their knowledge and enable them to make 
                 a positive impact on the society'</span>
                <br />
            
              </PText>
            </div>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
        </div>
    </AboutPageStyles>
  );
}