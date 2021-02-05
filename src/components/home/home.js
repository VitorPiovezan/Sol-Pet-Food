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
  // Footer,
  // Atendimento,
  // TitleFooter,
  // TextFooter,
  // RedesSociais,
  // ButtomFacebook,
  // ButtomInsta,
  // ImgBackgroundFooter,
  // Mapa,
  Container
  

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
              <TitleContato><Img1 src={textimg1}/>Entre em Contato<Img1 src={textimg1}/></TitleContato>
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
  
              {/* <Footer>
                <Atendimento>
                  <TitleFooter>Atendimento</TitleFooter>
                  <TextFooter><B>Email: </B>solpetfood@gmail.com</TextFooter>
                  <TextFooter><B>Facebook: </B>/SolPetFood</TextFooter>
                  <TextFooter><B>Whats: </B>(16) 99631-2366</TextFooter>
                </Atendimento>
  
                <RedesSociais>
                  <TitleFooter>Redes Socias</TitleFooter>
                  <ButtomFacebook><ImgBackgroundFooter /></ButtomFacebook>
                  <ButtomInsta><ImgBackgroundFooter /></ButtomInsta>
                </RedesSociais>
  
                <Mapa>
                  <TitleFooter>Mapa</TitleFooter>
                </Mapa>
              </Footer> */}
        </Container>
      </div>
    );
  }

  
}

export default Home;
