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


    button{
        width: 140px;
        height: 55px;

        background-color: #06427a;
        color: #fff;

        cursor: pointer;

        outline: none;

        border: 0;
        border-radius: 10px;

        margin-right: 30px;

        text-transform: uppercase;

        font-size: 1rem;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        &:hover{
            background-color:${shade(0.4, '#06427a')}
        }
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
