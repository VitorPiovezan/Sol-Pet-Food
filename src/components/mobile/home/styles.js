//Contato
import styled from 'styled-components';

export const Contato = styled.div`
    width: 100%;
    margin-bottom: 50px;  
    text-align: center;
    height: 450px;
    display: flex;
    flex-direction: row;
`


export const TitleContato = styled.h1`
    font-weight: bold;
    font-family: 'Ubuntu';
    font-size: 20pt;
    color: #282828;
    padding: 10px;
    margin-bottom: 20px;
`

export const Img1 = styled.img`
    height: 25px;
    padding: 0px 15px;
    transform: rotate(10deg);
`

export const ImputNome = styled.input`
    margin-top: 10px;
    padding: 5px;
    width: 80%;
    border: 0 none;
    border-bottom: 1px dotted #282828;
    transition: 0.4s;
    padding: 10px;
    font-size: 12pt;

    &:focus {  
    box-shadow: 0 0 0 0;
    outline: 0;

    }
`

export const TextBoxCelular = styled.textarea`
    margin-top: 10px;
    padding: 5px;
    width: 80%;
    height: 500px;
    border: 0 none;
    border-bottom: 1px dotted #282828;
    transition: 0.4s;
    padding: 10px;
    font-size: 12pt;
    margin-top: 40px;
    vertical-align: text-bottom;
    margin-bottom: 10px;

    &:focus {  
    box-shadow: 0 0 0 0;
    outline: 0;

    }
`

export const FormContatoCelular = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
`

export const ButtomWhats = styled.div`
    width: 45px;
    margin-left: -75%;
    transition: 0.4s;

    &:hover {  
    width: 50px;
    }
`

export const ImgBackground = styled.img`
    width: 45px;
    transition: 0.4s;

    &:hover {  
        width: 50px;
    }
`

export const ButtomFace = styled.div`
`

export const ContatoImagem = styled.div`
    max-width: 50%;
    opacity: 80%;
    display: flex;
`

export const BackgroundContato = styled.img`
    height: 100%;
    width: 100%;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`