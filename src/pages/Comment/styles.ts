import styled from 'styled-components';

export const MainDiv = styled.div`
    width: 100%;

    display: flex;
    justify-content:space-between;

    border-top: 1px solid black;

    padding-top: 0.7rem;
    margin-top: 1.2rem;

    div{
        width: 95%;
        word-wrap: break-word;

        margin-left: 0.5rem;
    }

    h2{
        display: inline;
        font-size: 1.2rem;

        margin-right: 0.2rem;
    }

    p{
        display: inline;
        font-style: italic;
    }

    h2:last-of-type{
        margin-left: 0.2rem;
    }

    span{
        margin-top: 0.3rem;
    }
`;
