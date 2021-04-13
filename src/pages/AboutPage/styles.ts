import styled from 'styled-components';

export const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:flex-start;
    img{
    height: 700px;
    box-shadow: 0 2px 4px #000000,0 8px 16px rgba(0, 0, 0, .1);
    }
    `;

export const RightDiv = styled.div`
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    height: 700px;
    h1{
        margin: 0px 0px 12px 35px;
        font-size: 2.25rem;
        font-weight: 700;
    }
    p{
        margin: 0px 0px 0px 35px;
        margin-bottom: 5px;
        font-size: 1.1rem;
    }
    div{
        margin: 20px 0px 20px 20px;
        display: flex;
        width: 300px;
    }

`;
