import banner01 from '../../assets/banners/banner-site.jpg';
import logo01 from '../../assets/logos/logo.png';
import face from '../../assets/logos/face.png';
import insta from '../../assets/logos/insta.png';
import textimg1 from '../../assets/images/Ativo2bigode.png';
import produto from '../../assets/images/Lata_exemplo.png';

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
    TextButton
} from './styles'

function Home() {
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
                    <ContatoLi><RedeSocial src={face}/></ContatoLi>
                    <ContatoLi><RedeSocial src={insta}/></ContatoLi>
                </ContatoTab>
            </Nav>
            <Logo src={logo01}/>
        </Menu>
        <Banner>
            <Imagem src={banner01}/>
        </Banner>
      </header>
      <main>
        <Sobre>
            <TituloSobre>Dieta Personalizada <ImagemText src={textimg1}/> </TituloSobre>
            <DadosDieta>
                <ProductImagem src={produto}/>
                <DadosProduct>
                  <TextProduct>Nossa receita de sucesso é preparar comidas deliciosas. saudáveis e nutritivas para os amiguinhos de quatro patas! Tudo fresquinho sem conservantes, feito de forma caseira. É assim que Sol Pet Food trabalha.</TextProduct>
                  <ButtonProdut>
                    <TextButton>Preencha Já</TextButton>
                  </ButtonProdut>
                </DadosProduct>
            </DadosDieta>
        </Sobre>
      </main>
    </div>
  );
}

export default Home;
