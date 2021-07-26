import styled from 'styled-components';



export const Logo = styled.h1`
    color: white;
    font-size: 60px;
    font-weight: bold;
    text-align: center;`

export const Corpo = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    margin: auto;
    color: white;

    `

export const Form = styled.form`
    text-align: center;
    padding: 15px;
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
    margin: 10px;
    color: white;
`
export const Botao = styled.button`
    background-color:black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:rgba(172, 10, 137, 0.7);
    border:none;
    font-size:22px;
    padding: 5px;
    margin: 20px;
    border-radius: 5%;
    border: solid white 1px;
    
    
    &:hover{
    background-color: rgba(231, 71, 170, 0.76);
    color:black;
    box-shadow: inset 0 0 1em black, 0 0 .5em rgba(231, 71, 170, 0.76);
    }
    `
export const Label = styled.label`
    padding: 10px;
    font-weight: bold;
    `
