import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 15px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.25rem;
    text-transform: uppercase;

    width: 100%;

    button:first-of-type{
        width: 140px;
        height: 55px;

        background-color: #06427a;
        color: #fff;

        cursor: pointer;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        padding-left: 10px;

        outline: none;

        border: 0;
        border-radius: 10px;

        margin-right: 30px;

        text-transform: uppercase;

        transition: 0.2s;

        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color:${shade(0.2, '#06427a')}
        }
    }

    button div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    button p{
        font-size: 0.8rem;
    }

    button strong{
        font-size: 1rem;
    }

    button img{
        width: 20px;
        height: 20px;
    }
`;

export const Div = styled.div`
    width: 650px;

    display: flex;
    justify-content:space-between;
    align-items: center;

    color: var(--blue-dark);

    margin-left: 40px;
    a{
        text-decoration: none;
        color: #06427a;
    }

    span{
        cursor: pointer;
        color: #06427a;
        &:hover{
            color:${shade(0.4, '#06427a')}
        }
    }

    img{
        width: 180px;
        height: 60px;

        cursor: pointer;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;

    button:last-of-type {
        width: 100px;
        height: 55px;

        color: #fff;
        cursor: pointer;
        background-color:#ff2d00;

        outline: none;

        border: 0;
        border-radius: 10px;
        
        font-size: 1rem;

        text-transform: uppercase;

        transition: 0.2s;

        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color:${shade(0.2, '#ff2d00')}
        }
 
    }
`;
