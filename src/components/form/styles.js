import styled from 'styled-components';

export const Cabec = styled.div`
    width: 100%;
    height: 150px;
    background-color: #FDC92B;
    display: flex;
    margin-bottom: 50px;
`
export const Formulario = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`

export const TextForm = styled.p`
    max-width: 700px;
    min-width: 350px;
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: left;
    `
export const TituloSobre = styled.h1`
    padding-bottom: 70px;
    color: #282828;
    font-size: 35pt;
    text-align: center;
`;

export const TituloSobreD = styled.h1`
    padding: 40px;
    color: #282828;
    font-size: 25pt;
    text-align: center;
`;

// dados form

export const Dados = styled.div`
    max-width: 500px;
    min-width: 350px;
    color: #282828;
`

export const TituloLongo = styled.h2`
    padding: 10px 0px;
    text-align: left;
    font-size: 18pt;
    font-weight: initial;
    margin-top: 10px;
`

export const InputLongo = styled.input`
    width: 100%;
    padding: 12px;
    font-size: 12pt;
    border-radius: 10px;
    border: 0 none;
    border: 1px solid #282828;

    &:focus {  
    box-shadow: 0 0 0 0;
    outline: 0;}
`

export const DivLong = styled.div`
    margin: auto;
    width: 80%;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 0px;
`

export const MasterDivShort = styled.div`
    margin: auto;
    width: 80%;
    margin-bottom: 10px;
    display: flex;
    margin-left: 20px;
    margin-right: 0px;
`

export const DivShort = styled.div`
    width: 47%;
    margin-right: 20px;

`
export const InputShort = styled.input`
    width: 80%;
    padding: 12px;
    font-size: 12pt;
    border-radius: 10px;
    border: 0 none;
    border: 1px solid #282828;

    &:focus {  
    box-shadow: 0 0 0 0;
    outline: 0;}
`

export const LabelRadio = styled.label`
    font-size: 14pt;
    margin-right: 3px;
    color: #282828;
`

export const LabelRadioLong = styled.label`
    font-size: 14pt;
    margin-right: 10px;
    color: #282828;
`

export const TituloLongoLabel = styled.h2`
    padding: 10px 0px;
    text-align: left;
    font-size: 18pt;
    font-weight: initial;
    margin-bottom: 10px;
`

export const BottonEnviar = styled.div`

    height: 60px;
    width: 250px;
    background-color: #97c56a;
    border-radius: 0px 40px 0px 40px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20pt;
    font-weight: bold;
    margin-top: 40px;
`