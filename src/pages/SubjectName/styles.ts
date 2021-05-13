import { shade } from 'polished';
import styled from 'styled-components';

export const MainDiv = styled.div`
    height: 40px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #9da0a3;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    cursor: pointer;
    transition: 0.15s;
    &:hover{
        background-color: ${shade(0.04, '#fff')}
    }
`;
