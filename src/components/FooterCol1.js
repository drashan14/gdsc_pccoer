import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import PText from './PText';

const ColStyles = styled.div`
   .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;


export default function ServicesSectionItem({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}) {
  return (
    <ColStyles>
      <div className="serviceItem__icon">{icon}</div>
    </ColStyles>
  );
}