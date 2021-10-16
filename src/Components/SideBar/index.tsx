import React from 'react';
import StickyBox from 'react-sticky-box';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

import List from '../List';
import News from '../News';
import FallowSugestion from '../FallowSugestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FallowSugestion 
            name="Vinicius Malafaia"
            nickname="@vinnie"
            />,
            <FallowSugestion 
            name="Samuel Andrade"
            nickname="@samuka"
            />,
            <FallowSugestion 
            name="Gabriel Lima"
            nickname="@bielzin"
            />
          ]}
        />
        <List 
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />
        <List 
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />
        <List 
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
        />
      </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;