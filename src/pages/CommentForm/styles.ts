import { shade } from 'polished';
import styled from 'styled-components';

export const MainDiv = styled.div`
    position: relative;
    width: 42rem;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1),0 8px 16px rgba(0, 0, 0, .1);
    background-color: #808FA2;
    padding: 1rem;
    header{
        display: flex;
        width: 100%;
        color: #fff;
        font-size: 1.7rem;
        font-family: Roboto, sans-serif;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        /* button{
            margin-left: 300px;
            height: 30px;
            width: 50px;
            background: transparent;
            cursor: pointer;
        } */
    }
    header button{
        position:absolute;
        right: 0.5rem;
        top: 0.5rem;
        background: transparent;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 0;
        cursor: pointer;
    }
    header button:focus{
        outline: none;
    }
    div strong{
        color: #fff;
        font-size: 1.4rem;
        font-family: Roboto, sans-serif;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
    }
`;

export const FeedDiv = styled.div`
    max-height: 400px;
    overflow-y: scroll;
`;

export const CommentFormField = styled.div`
    background-color: #fff;
    width: 100%;
    height: 14rem;
    border-radius: 10px;
    border: 1px solid #9da0a3;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
    textarea{
        width: 95%;
        border: none;
        border-bottom: 1px solid #404040;
        padding: 0.25rem;
    }
    textarea:focus {
        border-bottom-color: #00BDFC;
        outline: none;
    }
    button{
        width: 30%;
        height: 35px;
        border-radius: 5px;
        border-color: #4953B8;
        cursor: pointer;
        color: #fff;
        background-color: #4953B8;
        font-size: 0.9rem;
        font-weight: 600;
        margin-top: 15px;
        transition: filter 0.3s;
        outline: none;
        &:hover{
            background-color: ${shade(0.1, '#4953B8')}
        }
    }
`;

export const HiperDiv = styled.div`
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

export const TeacherDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    label{
        color: #fff;
        font-size: 1.3rem;
        font-family: Roboto, sans-serif;

        margin-right: 1rem;
    }
`;
