import React, {useEffect, useState} from 'react';

import banner01 from '../../assets/banners/banner-site.jpg';
import logo01 from '../../assets/logos/logo.png';
import face from '../../assets/logos/face.png';
import insta from '../../assets/logos/insta.png';
import textimg1 from '../../assets/images/Ativo2bigode.png';
import produto from '../../assets/images/Lata_exemplo.png';
import dogcell from '../../assets/images/cachorrocelular.png';
import whats from '../../assets/logos/whats.png'
import pata from '../../assets/images/fg.png';

import {
  Menu,
  Banner,
  Imagem,
  Logo,
  Sobre,
  TituloSobre,
  Nav,
  NavTab,
  NavLi,
  ContatoTab,
  ContatoLi,
  RedeSocial,
  Link,
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
  ButtomFace,
  ContatoImagem,
  BackgroundContato,
  TextBox,
  Footer,
  Atendimento,
  TitleFooter,
  TextFooter,
  RedesSociais,
  ButtomFacebook,
  ButtomInsta,
  ImgBackgroundFooter,
  Mapa,
  Container,
  B,
  ButtonsSocial
  

} from './styles'



function Home() {

  const [widthWindow, setWidthWindow] = useState(window.screen.availWidth);
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

  if (window.screen.width <= 500){
    return (
      <div>
        <Contato>
            <FormContato>
              <TitleContato><Img1 src={pata}/>Entre em Contato<Img1 src={textimg1}/></TitleContato>
                <ImputNome placeholder="Seu Nome" type="text"
                                                  value={nome}
                                                  onChange={e => setNome(e.target.value)}></ImputNome>
                <ImputNome placeholder="Seu Email"type="text"
                                                  value={email}
                                                  onChange={e => setEmail(e.target.value)}></ImputNome>
                <TextBox placeholder="Sua Mensagem"type="text"
                                                  value={mensagem}
                                                  onChange={e => setMensagem(e.target.value)}></TextBox>
                <ButtomWhats><a href={linkWhats} target="blank"><ImgBackground src={whats}/></a></ButtomWhats>
                <ButtomFace><ImgBackground /></ButtomFace>
            </FormContato>
          </Contato>
      </div>
      )
  } else {
    return (
      <div>
        <header>
  
          <Menu>
            <Nav>
              <NavTab>
                <NavLi><Link href="https://agenciaolcan.com.br">Sobre</Link></NavLi>
                <NavLi>Produtos</NavLi>
                <NavLi>Contatos</NavLi>
              </NavTab>
              <ContatoTab>
                <ContatoLi><RedeSocial src={face} /></ContatoLi>
                <ContatoLi><RedeSocial src={insta} /></ContatoLi>
              </ContatoTab>
            </Nav>
            <Logo src={logo01} />
          </Menu>
          <Banner>
            <Imagem src={banner01} />
          </Banner>
        </header>
        <Container>
          <Sobre>
            <TituloSobre>Dieta Personalizada <ImagemText src={textimg1} /> </TituloSobre>
            <DadosDieta>
              <ProductImagem src={produto} />
              <DadosProduct>
                <TextProduct>Nossa receita de sucesso é preparar comidas deliciosas. saudáveis e nutritivas para os amiguinhos de quatro patas! Tudo fresquinho sem conservantes, feito de forma caseira. É assim que Sol Pet Food trabalha.</TextProduct>
                <a href="https://agenciaolcan.com.br"><ButtonProdut>
                  <TextButton>Preencha Já</TextButton>
                </ButtonProdut></a>
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
                <ButtomWhats><a href={linkWhats} target="blank"><ImgBackground src={whats}/></a></ButtomWhats>
                <ButtomFace><ImgBackground /></ButtomFace>
            </FormContato>
                <ContatoImagem>
                  <BackgroundContato src={dogcell}/>
                </ContatoImagem>
          </Contato>
  
              <Footer>
                <Atendimento>
                  <TitleFooter>Atendimento</TitleFooter>
                  <TextFooter><B>Email: </B>solpetfood@gmail.com</TextFooter>
                  <TextFooter><B>Facebook: </B>/SolPetFood</TextFooter>
                  <TextFooter><B>Whats: </B>(16) 99631-2366</TextFooter>
                </Atendimento>
  
                <RedesSociais>
                  <TitleFooter>Redes Socias</TitleFooter>
                  <ButtonsSocial>
                  <ButtomFacebook><a href={face} target="blank"><ImgBackground src={face}/></a></ButtomFacebook>
                  <ButtomInsta><a href={insta} target="blank"><ImgBackground src={insta}/></a></ButtomInsta></ButtonsSocial>
                </RedesSociais>
  
                <Mapa>
                  <TitleFooter>Mapa</TitleFooter>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4421.6215132760635!2d-48.4983711737666!3d-21.2664921336997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9469f1921e797%3A0xc0ad2a5db95abcab!2sR.%20Adelino%20Buzinaro%20-%20Vila%20Sao%20Cristovao%2C%20Monte%20Alto%20-%20SP%2C%2015910-000!5e0!3m2!1spt-BR!2sbr!4v1612753029662!5m2!1spt-BR!2sbr" width="120%" height="250" frameborder="0" styles="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </Mapa>
              </Footer>
        </Container>
      </div>
    );
  }

  
}

export default Home;
