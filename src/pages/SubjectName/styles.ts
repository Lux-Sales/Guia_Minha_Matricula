import { shade } from 'polished';
import styled from 'styled-components';

export const MainDiv = styled.div`
    height: 40px;
    width: 100%;
<<<<<<< Updated upstream
<<<<<<< HEAD
    background-color: #fff;
    border: 1px solid #9da0a3;
    padding-left: 5px;
=======

    background-color: #fff;

    border: 1px solid #9da0a3;

    padding-left: 5px;

>>>>>>> 578f4e0afb1330831798fff75e23d823bc0256ba
=======
    background-color: #fff;
    border: 1px solid #9da0a3;
    padding-left: 5px;
>>>>>>> Stashed changes
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
<<<<<<< Updated upstream
<<<<<<< HEAD
    cursor: pointer;
    transition: 0.15s;
=======

    cursor: pointer;

    transition: 0.15s;

>>>>>>> 578f4e0afb1330831798fff75e23d823bc0256ba
=======
    cursor: pointer;
    transition: 0.15s;
>>>>>>> Stashed changes
    &:hover{
        background-color: ${shade(0.04, '#fff')}
    }
`;
