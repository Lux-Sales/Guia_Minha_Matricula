import React from 'react';
import Feed from '../Feed';
import ProfessorRegister from '../ProfessorRegister';
import SearchBar from '../SearchBar';
import SubjectRegister from '../SubjectRegister';
import UserNavBar from '../UserNavBar';
import { MainDiv, RegistersDiv, LeftDiv } from './styles';

interface UserHomeProps{
    userID:string
}

const UserHome: React.FC<UserHomeProps> = (props:UserHomeProps) => {
  const { userID } = props;
  return (
    <>
      <UserNavBar />
      <MainDiv>
        <LeftDiv>
          <SearchBar userID={userID} />
          <RegistersDiv>
            <SubjectRegister />
            <ProfessorRegister />
          </RegistersDiv>
        </LeftDiv>
        <Feed />
      </MainDiv>
    </>
  );
};
export default UserHome;
