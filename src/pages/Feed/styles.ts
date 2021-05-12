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
    max-height: 75vh;
    width: 100%;

    overflow-y: scroll;

    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1),0 8px 16px rgba(0, 0, 0, .1);

    background-color: #F2F3F5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const CommentDiv = styled.div`
    margin: 0.5rem;

    width: 95%;

    border: 1px solid #C1B7B7;
    border-radius: 10px;

    padding: 10px;

    p:first-of-type{
        display: inline;
        font-style: italic;
    }

    h2{
        color: #282727;
    }

    h3{
        display: inline;
    }

    p:last-of-type{
        margin-top: 0.3rem;
        word-wrap: break-word;
    }
`;
