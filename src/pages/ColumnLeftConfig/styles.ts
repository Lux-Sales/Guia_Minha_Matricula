import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainDiv = styled.div`
    display: flex;
    flex-flow: column;
    flex: 0 1 auto;
    justify-content: space-around;

    padding: 25px;
    margin: 25px;
    background-color: rgba(73,83,184, 0.1);
    border-radius: 20px;

    font-size: 30px;
    text-decoration: none;
    color: black;

    header{
        width: 100%;
        border-bottom: 1px solid #aaa;
        color: #4953B8;

        display: flex;
        justify-content:space-between;
        align-items: center;
    }

    li {
         list-style-type: none;
    }

    link {
        text-decoration: none;
        color : red;
    }

    div{
        height: 75px;
        display: flex;
        align-items:center;
        border-radius: 25px;
    }

    li div {
        &:hover{
            background-color: rgba(73,83,184, 0.25);
    }
    }

`;

export const StyledLink = styled(Link)`
    text-decoration: none; 
    color:black; 
    
    &:hover{
        color: #4953B8;
        text-decoration: underline;
    }
`;
