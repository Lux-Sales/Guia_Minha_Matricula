import styled, { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
     html, body {
        height: 100%;
    } 
`;

export const MainDiv = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
`;
export const Box = styled.div`
    display: flex;
    height: 100% ;

`;

export const Content = styled.div`
    display : flex;
    flex-flow: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items : center;
    
`;
