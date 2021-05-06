import React from 'react';
import ColumnLeftConfig from '../ColumnLeftConfig';
import UserNavBar from '../UserNavBar';
import {
  Box,
  Content,
  Globalstyle,
  MainDiv,
} from './styles';

type Props = {
  children: JSX.Element,
};

const ConfigurationPage: React.FC<Props> = ({ children }: Props) => (
  <MainDiv>
    <UserNavBar />
    <Box>
      <Globalstyle />
      <ColumnLeftConfig />
      <Content>
        { children }
      </Content>
    </Box>
  </MainDiv>
);

export default ConfigurationPage;
