import styled from 'styled-components';
import { shade } from 'polished';

export const Div = styled.div`
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 260px;
    left: 100px;
    z-index: 10;
    h2{
        font-size: 2.5rem;
    font-family: Roboto, sans-serif;

    text-align: left;

    width: 100%;

    color: #000;
    margin-bottom: 0px;
    }
    p{
        font-family: Roboto, sans-serif;
    font-size: 1.125rem;

    text-align: left;

    color: #06427a;
    }
    img{
        width: 500px;
        height: 768px;
    }
`;

export const ButtonsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto, sans-serif;

    button{
        width: 40%;
    height: 40px;

    border-radius: 5px;
    border-color: #06427a;

    color: #fff;
    background-color: #06427a;

    font-weight: 600;
    font-size: 0.95rem;

    transition: filter 0.3s;

    outline: none;
    &:hover{
        background-color: ${shade(0.4, '#06427a')}
    }
    }
    a{
        width: 40%;
        button{
            width: 100%;
    height: 40px;

    border-radius: 5px;
    border-color: #06427a;

    color: #06427a;
    background-color: #fff;

    font-weight: 600;
    font-size: 0.95rem;

    transition: filter 0.3s;

    outline: none;
    &:hover{
        background-color: ${shade(0.4, '#fff')}
    }
        }
    }
`;

export const MainDiv = styled.div`
display: flex;
img{
    position:absolute;
    width: 900px;
    height: 700px;
    padding: 0px;
    right: 0px;
    margin-right: 10px;
    z-index: 0;
}
`;
