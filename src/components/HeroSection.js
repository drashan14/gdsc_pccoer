import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import HeroImg from '../assets/images/herosectionimg.png';

const AboutPageStyles = styled.div`
    padding-top: 4rem;
    background-color: #181721;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
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
    font-size: 3.6rem;
    margin-top: 1rem;
    color: white;
  }
  .about__info {
    margin-bottom: 6rem;
    .para {
      max-width: 100%;
      text-align: center;
    }
  }
  .right {
    img {

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
      text-align: center;
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
            <h2 className="about__heading">DSC PCCOE&R</h2>
             <div className="about__info">
              <PText>
                <p>Our vision at DSC PCCOE&R is to forge great designers,</p> 
                <p>deveopers and managers by working on projects and bind </p>
                <p>them together to shape our society</p> 
                <p>"Alone we can do solittle, together we can do so much."</p>
                <p> -- Helen Keller</p>
              </PText>
            </div>
          </div>
          <div className="right">
          <img src={HeroImg} alt="me" />
          </div>
        </div>
      </div>
    </AboutPageStyles>
  );
}