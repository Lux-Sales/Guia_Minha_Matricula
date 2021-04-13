import styled from 'styled-components';

export const MainDiv = styled.div`
position: absolute;
width: 300px;
height: 450px;
top: 20%;
left: 35%;
z-index: 100;
text-align: center;
border: #000 2px solid;
background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
strong{
    margin-top: 20px;
    margin-bottom: 30px;
}
input{
    margin: 5px 20px 20px 0;
    width: 200px;
}
button{
    margin-bottom: 10px;
}
button:first-child{
    margin-right: 100px;
}
button+button{
    margin-right: 0px;
}
label{
    margin-right: 126px;
    white-space: nowrap;
    width: 100px;
    text-align: left
}
`;
