import styled from "styled-components";

 export const FriendListStyled = styled.ul`
    display: flex;
    flex-direction: row
    list-style: none;
    margin: 0;
    padding: 50px 5px 5px 5px;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`;

export const FriendListItemStyled = styled.li`
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0 auto 10px auto;
    padding: 0;
    width: 50%;
    height: 500%;
    border-radius: 10px;
    &:hover {
        background-color: pink;
    }
`;

export const FriendListStatusStyled = styled.span`
background-color: ${props => props.status ? '#00ff00' : '#ff0000'};
border-radius: 50%;
height: 10px;
width: 10px;  
`;
export const FriendListNameStyled = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    
    width: 100%;
    `;