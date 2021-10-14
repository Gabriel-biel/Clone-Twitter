import React from 'react';

import { 
  Container,
  Retweeted,
  RockseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent, 
  Icons, 
  Status, 
  CommentIcon, 
  RetweetIcon, 
  LikeIcon, } from './styles';

const Twitte: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RockseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rockseat</strong>
            <span>@rockseat</span>
            <Dot />
            <time>7 de Outubro</time>
          </Header>
          <Description>
            Foguete não tem rê 🚀
          </Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              188
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>

        </Content>
      </Body>
    </Container>
  );
}

export default Twitte;