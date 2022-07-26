import styled from "styled-components";

export const TransactionHistoryStyled = styled.table`
    border: 1px solid;
    border-collapse: collapse;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #333;
    text-align: center;
    border-radius: 5px;
    border-spacing: 0;
    `;

    export const TransactionHistoryItemStyled = styled.tr`
        border: 1px solid;
        border-collapse: collapse;
        margin: 0 auto;
        padding: 0;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        &:hover {
            background-color: pink;
        }
    `;
    