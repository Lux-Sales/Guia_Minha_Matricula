import styled from 'styled-components';

export const MainDiv = styled.div`
    margin-top: 3rem;

    display: flex;
    justify-content: space-around;
    align-items:flex-start;

    img{
        height: 700px;
        box-shadow: 0 2px 4px #000000,0 8px 16px rgba(0, 0, 0, .1);
    }
`;

export const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;

    height: 600px;

`;

export const HeaderInfo = styled.div`
    height: 140px;
    width: 800px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: Roboto, sans-serif;

    color: #142634;

    header{
        font-size: 2.25rem;
        font-weight: 700;
    }

    p{
        font-size: 1.1rem;
    }

`;

export const CardsContainer = styled.div`
    width: 60rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
`;
