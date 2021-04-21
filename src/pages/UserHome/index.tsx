import React from 'react';
import Feed from '../Feed';
import ProfessorRegister from '../ProfessorRegister';
import SearchBar from '../SearchBar';
import SubjectRegister from '../SubjectRegister';
import UserNavBar from '../UserNavBar';
import { MainDiv, RegistersDiv, LeftDiv } from './styles';

const UserHome: React.FC = () => (
  <>
    <UserNavBar />
    <MainDiv>
      <LeftDiv>
        <SearchBar />
        <RegistersDiv>
          <SubjectRegister />
          <ProfessorRegister />
        </RegistersDiv>
      </LeftDiv>
      <Feed />
    </MainDiv>
  </>
);
export default UserHome;
