import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.section`
    box-sizing: border-box;
    padding: 1em;
    width: 30%;
    
`;

class LatestTrades extends Component {
    render(){
        return(
            <Container>
                <p>Latest trades</p>
            </Container>
        )
    }
}
export default LatestTrades;