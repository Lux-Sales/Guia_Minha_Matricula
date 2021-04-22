import styled from 'styled-components';
import { shade } from 'polished';

export const OverlayDiv = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const MainDiv = styled.div`
    position: relative;

    height: 560px;
    width: 400px;

    text-align: center;

    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1),0 8px 16px rgba(0, 0, 0, .1);

    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    padding: 15px;
    padding-bottom: 0;

    header{
        width: 100%;
        border-bottom: 1px solid #aaa;

        display: flex;
        justify-content:space-between;
        align-items: center;

    }

    strong{
        font-size: 1.7rem;
        font-family: Roboto, sans-serif;

        color: #4953B8;
    }

    header button{
        position:absolute;
        right: 0.5rem;
        top: 0.5rem;
        background: transparent;
        border: 0;
        font-size: 0;

        cursor: pointer;
    }

    header button:focus{
        outline: none;
    }

    div{
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    input{
        width: 100%;
        height: 50px;

        border: 1px solid #9da0a3;
        border-radius: 5px;

        font-size: 1.25rem;

        padding: 10px;
    }

    input:focus{
        outline: none;
        border-color: rgb(140, 187, 206);
        box-shadow: 0 0 6px #719ECE;

    }

    div button{
        width: 100%;
        height: 50px;

        border-radius: 5px;
        border-color: #4953B8;

        cursor: pointer;

        color: #fff;
        background-color: #4953B8;

        font-size: 1.25rem;
        font-weight: 600;

        margin-top: 15px;

        transition: filter 0.3s;

        outline: none;
        &:hover{
            background-color: ${shade(0.1, '#4953B8')}
        }

    }

    div button:disabled{
        cursor: default;
        background-color: #4953B8;
        opacity: 0.8;
    }

    label{
        font-size: 1.25rem;

        width: 100%;
        text-align: left;

        padding: 3px;
    }
`;
