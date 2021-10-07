import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar Perfil </EditButton>
        <h1>Gabriel Lima</h1>
        <h2>@gabriel_lima</h2>

        <p>
          Developer freelancer <a href="https://github.com/Gabriel-Biel">Meu Perfil</a> no github.
        </p>
        <ul>
          <li>
            <LocationIcon />
            Manaus, Amazonas
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 22 agosto de 1998
          </li>
        </ul>
        <Followage>
          <span>
           <strong>98 </strong>Seguindo
          </span>
          <span>
            <strong> 98 </strong>Seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;