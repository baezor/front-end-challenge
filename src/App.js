import React, { Component } from 'react';
import styled from 'styled-components';

const BitsoApp = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: none;
`;

class App extends Component {
  render() {
    return (
      <BitsoApp>
      <Wrapper>
        <Title> BITSO APP</Title>
      </Wrapper>
      </BitsoApp>
    );
  }
}

export default App;
