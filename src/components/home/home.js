import React, {useEffect, useState} from 'react';

import banner01 from '../../assets/banners/banner-site.jpg';
import textimg1 from '../../assets/images/Ativo2bigode.png';
import produto from '../../assets/images/Lata_exemplo.png';
import dogcell from '../../assets/images/cachorrocelular.png';
import whats from '../../assets/logos/whats.png'
import pata from '../../assets/images/fg.png';

import Footer from '../footer/footer'
import HeaderMenu from '../header/header'

import {
  Banner,
  Imagem,
  Sobre,
  TituloSobre,
  ImagemText,
  DadosDieta,
  DadosProduct,
  TextProduct,
  ProductImagem,
  ButtonProdut,
  TextButton,
  Contato,
  FormContato,
  TitleContato,
  Img1,
  ImputNome,
  ButtomWhats,
  ImgBackground,
  ButtomW,
  ContatoImagem,
  BackgroundContato,
  TextBox,
  Container,
  TextButtomWhats,
  LinkZap,
  LinkForm
} from './styles'



export default function Home() {

  const [linkWhats, setLinkWhats] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    console.log(nome)
    console.log(email)
    console.log(mensagem)
    setLinkWhats("https://api.whatsapp.com/send?phone=5516996163774&text=*Nome:*%20"+nome+"%0a*Email:*%20"+email+"%0a%0a"+mensagem)
    console.log(linkWhats)
  }, [email, nome, mensagem]);

    return (
      <div>
  
          
        <HeaderMenu/>
          <Banner className="banner">
            <Imagem className="banner-img" src={banner01} />
          </Banner>
        <Container>
          <Sobre>
            <TituloSobre>Dieta Personalizada <ImagemText src={textimg1} /> </TituloSobre>
            <DadosDieta>
              <div style={{textAlign: "center"}}>
              <ProductImagem src={produto} />
              </div>
              <DadosProduct>
                <TextProduct>Nossa receita de sucesso é preparar comidas deliciosas. saudáveis e nutritivas para os amiguinhos de quatro patas! Tudo fresquinho sem conservantes, feito de forma caseira. É assim que Sol Pet Food trabalha.</TextProduct>
                <LinkForm href="/form"><ButtonProdut>
                  <TextButton>Faça seu Orçamento</TextButton>
                </ButtonProdut></LinkForm>
              </DadosProduct>
            </DadosDieta>
          </Sobre>
  
          <Contato>
            <FormContato>
              <TitleContato><Img1 src={pata}/>Entre em Contato<Img1 width="50px" src={textimg1}/></TitleContato>
                <ImputNome placeholder="Seu Nome" type="text"
                                                  value={nome}
                                                  onChange={e => setNome(e.target.value)}></ImputNome>
                <ImputNome placeholder="Seu Email"type="text"
                                                  value={email}
                                                  onChange={e => setEmail(e.target.value)}></ImputNome>
                <TextBox placeholder="Sua Mensagem"type="text"
                                                  value={mensagem}
                                                  onChange={e => setMensagem(e.target.value)}></TextBox>
                <ButtomWhats><LinkZap href={linkWhats} target="blank"><ImgBackground src={whats}/><ButtomW><TextButtomWhats>Enviar</TextButtomWhats></ButtomW></LinkZap></ButtomWhats>
            </FormContato>
                <ContatoImagem>
                  <BackgroundContato src={dogcell}/>
                </ContatoImagem>
          </Contato>
              <Footer/>
        </Container>
      </div>
    );
  }