import React from 'react';

import Button from '../Button';
import { 
  Container, 
  TopSide, 
  Logo, 
  MenuBottom, 
  HomeIcon, 
  BellIcon, 
  EmailIcon, 
  FavoriteIcon, 
  ProfileIcon,
  ExitIcon,
  BotSide,
  Avatar,
  ProfileData
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container >
      <TopSide>
        <Logo />
        <MenuBottom>
            <HomeIcon />
            <span>Home Page</span>
        </MenuBottom>

        <MenuBottom>
            <BellIcon />
            <span>Notifications</span>
        </MenuBottom>
        
        <MenuBottom>
            <EmailIcon />
            <span>Email</span>
        </MenuBottom>

        <MenuBottom>
            <FavoriteIcon />
            <span>Favorite</span>
        </MenuBottom>

        <MenuBottom>
            <ProfileIcon />
            <span>Porfile</span>
        </MenuBottom>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Gabriel Lima</strong>
          <span>@gabriel_lima</span>
        </ProfileData>
          <ExitIcon/>
      </BotSide>
    </Container>
  );
}

export default MenuBar;