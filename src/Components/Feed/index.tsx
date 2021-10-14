import React from 'react';

import { Container, Tab, Twittes } from './styles';
import Twitte from '../Twitte';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Twittes</Tab>

      <Twittes>
        <Twitte />
        <Twitte />
        <Twitte />
        <Twitte />
        <Twitte />
      </Twittes>
    </Container>
  )
}

export default Feed;