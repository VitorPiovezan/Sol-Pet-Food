import styled from 'styled-components';
import dogcell from '../../assets/images/cachorrocelular.png';

export const Container = styled.div`
    flex-direction: column;
    margin: auto;
    display: flex;
    width: 70%;
    font-family: 'Ubuntu';
    align-items: center;
`

export const Teste = styled.h1`
    padding: 7px;
    color: #4484CE;
`;

export const Menu = styled.div`
    margin: auto;
    min-width: 350px;
    height: 120px;
    background-color: #ffffff;
    font-family: 'Ubuntu';
    text-align: center;
`

export const Banner = styled.div`
    /* width: 100%;
    min-width: 500px;
    min-height: 300px;
    background-color: #FDC92B;
    max-height: 600px; */
    text-align: center;
`
export const Imagem = styled.img`
    max-height: 600px;
    min-height: 250px;
    width: 100%;
    object-fit: cover;
    object-position: top;
    object-position: left;
`

export const Logo = styled.img`
    height: 100px;
`
export const Sobre = styled.div`
    width: 100%;
    min-width: 350px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0px 40px 0px;
`
export const TituloSobre = styled.h1`
    height: 50px;
    color: #282828;
    font-size: 26pt;
    padding-bottom: 70px;
`;

//Menu Nav


export const Nav = styled.nav`
    position: relative;
    width: 80%;
    height: 100%;
    margin: auto;
`;

export const NavTab = styled.ul`
    text-align: left;
    padding: 22px 0px;
    margin-left: 10px;
`;

export const NavLi = styled.li`
    font-size: 15pt;
    padding: 0px 15px;
    display: inline-block;
`;

export const ContatoTab = styled.ul`
    text-align: right;
    margin-top: -50px;
    margin-right: 15px;
`;

export const ContatoLi = styled.li`
    font-size: 15pt;
    padding: 0px 10px;
    display: inline-block;
`;

export const RedeSocial = styled.img`
    height: 40px;
`
export const Link = styled.a`
    text-decoration: none;
    color: #282828;
    font-weight: bold;
`
export const ImagemText = styled.img`
    height: 35px;
    padding: 0px 15px;
    transform: rotate(-10deg);
`


// Div Dieta personalizada


export const DadosDieta = styled.div`
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
export const DadosProduct = styled.div`
    min-width: 350px;
    height: 250px;
`
export const TextProduct = styled.p`
    min-width: 200px;
    max-width: 500px;
    font-size: 1.2rem;
    padding: 20px 0px;
    line-height: 1.5;
    color: #282828;
`
export const ProductImagem = styled.img`
    max-height: 200px;
    min-width: 50px;
    padding: 0px 70px 50px 70px;
`
export const ButtonProdut = styled.div`
    margin-top: 25px;
    background-color: #fdc92b;
    width: 200px;
    height: 50px;
    border-radius: 25px;
`
export const TextButton = styled.p`
    font-weight: bold;
    font-size: 14pt;
    color: #282828;
    padding: 15px;
`

//Depoimentos

//Contato


export const Contato = styled.div`
    margin-bottom: 50px;  
    text-align: center;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1000px;
    min-width: 350px;
    justify-content: center;
`

export const TitleContato = styled.h1`
    font-weight: bold;
    font-size: 25pt;
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

export const TextBox = styled.textarea`
    margin-top: 10px;
    padding: 5px;
    width: 80%;
    height: 40%;
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

export const FormContato = styled.div`  
    border: 0.2px dotted #282828;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 405px;
    padding: 20px 0px;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px 0px;
`

export const ImgBackground = styled.img`
    width: 45px;
    transition: 0.4s;
`

export const TextButtomWhats = styled.p`
    justify-content: center;
    align-items: center;
    vertical-align: center;
`

export const ButtomW = styled.div`
    height: 40px;
    width: 100px;
    background-color: #57c540;
    border-radius: 10px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 15pt;
    font-weight: bold;
`

export const ContatoImagem = styled.div`
    height: 445px;
    border: 0.2px dotted #282828;
    width: 350px;
    opacity: 80%;
`

export const BackgroundContato = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const LinkZap = styled.a`
    margin-top: 5px;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 0.3s;

    &:hover {  
        margin-left: 7px;
    }
`
//Footer



export const Footer = styled.div`
    border-top: 1px solid #282828;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 0px 0px 0px;
    margin-bottom: 50px;
    width: 90%;
    max-width: 1000px;
    min-width: 350px;
`

export const Atendimento = styled.div`
padding: 0px 20px;
margin-bottom: 20px;
`

export const TitleFooter = styled.h1`
    padding: 0px 0px 40px 0px ;
    font-size: 2.0rem;
`

export const TextFooter = styled.p`
    padding: 7px 0px;
    font-size: 1.0rem;
`

export const RedesSociais = styled.div`
    padding: 0 20px;
margin-bottom: 20px;
`

export const ButtomFacebook = styled.div`
    margin-right: 10px;
`

export const ButtomInsta = styled.div`

`

export const ImgBackgroundFooter = styled.img`

`

export const Mapa = styled.div`
`

export const B = styled.label`
    font-weight: bold;
`

export const ButtonsSocial = styled.div`
    display: flex;
    flex-direction: row;
`

export const LinkForm = styled.a`
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
`

// Footer,
// Atendimento,
// TitleFooter,
// TextFooter,
// RedesSociais,
// ButtomFacebook,
// ButtomInsta,
// ImgBackgroundFooter,
// Mapa,