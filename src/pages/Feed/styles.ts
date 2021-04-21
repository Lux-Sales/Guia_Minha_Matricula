import styled from 'styled-components';

export const MainDiv = styled.div`
    width: 500px;

    header{
        width: 100%;

        border-bottom: 1px solid #aaa;

        display: flex;
        justify-content:space-between;
        align-items: center;

        margin-bottom: 10px;
    }

    strong{
        font-size: 1.7rem;
        font-family: Roboto, sans-serif;

        color: #4953B8;
    }
`;

export const FeedDiv = styled.div`
    height: 75vh;
    width: 100%;

    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1),0 8px 16px rgba(0, 0, 0, .1);

    background-color: #F2F3F5;
`;
