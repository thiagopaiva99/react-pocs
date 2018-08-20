import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
`;

export default props => (
  <Wrapper>
    <Title>{props.children}</Title>
  </Wrapper>
);
