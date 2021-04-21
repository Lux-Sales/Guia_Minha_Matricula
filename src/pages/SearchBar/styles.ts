import styled from 'styled-components';

export const MainDiv = styled.div`
    height: 400px;
    width: 900px;

    span{
        display: block;
        font-size: 1.4rem;

        margin-left: 20px;
        margin-bottom: 10px;

    }

    input{
        height: 50px;
        width: 100%;

        border: 1px solid #9da0a3;
        border-radius: 20px;

        font-size: 1.25rem;

        padding: 10px;

        /* background: url("imgs/search-icon.webp") no-repeat right center; */
        margin-bottom: 1px;
    }

    input:focus{
        outline: none;
    }
/*
    div{
        max-height: 280px;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: red;

    } */

`;

export const ResultsDiv = styled.div`
    max-height: 280px;
    overflow-y: scroll;

    /* border-radius: 10px; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1),0 8px 16px rgba(0, 0, 0, .1);


`;
