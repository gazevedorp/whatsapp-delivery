import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 90vw;
    margin-top: 20px;
    background-color: #d72d01;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardImage = styled.img`
    width: 100%;
`;

export const CardTitle = styled.p`
    font-size: 24px;
    padding: 0px;
    margin: 5px;
    color: white;
`;

export const CardPrice = styled.p`
    font-size: 26px;
    font-weight: bold;
    padding: 5px;
    margin: 0px;
    color: white;
`;

export const CardLink = styled.a`
    width: 100%;
    text-align: center;
`;

export const CardButton = styled.button`
    width: 100%;
    padding: 15px;
    background-color: white;
    border-radius: 10px;
    border: 0px;
    margin-top: 5px;
    font-size: 18px;
`;