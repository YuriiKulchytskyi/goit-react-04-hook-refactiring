import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    padding-left: 20px;
`

export const ButtonList = styled.ul`
    display: flex;
    column-gap: 20px;
    padding-left: 20px;

`

export const Button = styled.button`
    background-color: #fff;
    border-color: lightgray;
    border-radius: 5px;
    &:active{
        background-color: lightblue;
    }

`

export const StatisticsP = styled.p`
    margin-left: 20px;
    text-transform: capitalize;
`