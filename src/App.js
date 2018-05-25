import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './MainNavigation';
import Dashboard from './Dashboard';
import LatestTrades from './LatestTrades';


const Title = styled.h1`
  margin: 0;
  font-size: 1.5em;
  text-align: left;
  color: white;
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
`;

class App extends Component {
  render() {
    return (
      <div>
          <Nav>
              <Title> BITSO APP</Title>
          </Nav>
          <Dashboard>
            <LatestTrades/>
          </Dashboard>
      </div>

    );
  }
}

export default App;
