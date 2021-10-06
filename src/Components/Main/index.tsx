import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
  Container, 
  Header, 
  BackIcon, 
  ProfileInfo, 
  BottomMenu, 
  SearchIcon,
  BellIcon, 
  EmailIcon, 
  HomeIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Gabriel Lima</strong>
          <span>01 Tweets</span>
        </ProfileInfo>
      </Header>

        <ProfilePage />
        <BottomMenu>
          <HomeIcon className="active"/>
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu>
    </Container>
  );
}

export default Main;