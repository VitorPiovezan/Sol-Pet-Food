import React, { useEffect, useState } from 'react';

import banner01 from '../../assets/banners/banner-site.jpg';
import logo01 from '../../assets/logos/logo.png';
import face from '../../assets/logos/face.png';
import insta from '../../assets/logos/insta.png';
import textimg1 from '../../assets/images/Ativo2bigode.png';
import produto from '../../assets/images/Lata_exemplo.png';
import dogcell from '../../assets/images/cachorrocelular.png';
import whats from '../../assets/logos/whats.png'
import pata from '../../assets/images/fg.png';

import HomeMobile from '../mobile/home/home'

import {
    Menu,
    Banner,
    Imagem,
    Logo,
    Nav,
    NavTab,
    NavLi,
    ContatoTab,
    ContatoLi,
    RedeSocial,
    Link,
    ImgBackground,
    Footer,
    Atendimento,
    TitleFooter,
    TextFooter,
    RedesSociais,
    ButtomFacebook,
    ButtomInsta,
    Mapa,
    Container,
    B,
    ButtonsSocial,
    ImagemText,
    LinkForm


} from '../home/styles'

import {
    Cabec,
    Formulario,
    TextForm,
    TituloSobre,
    TituloSobreD,
    Dados,
    TituloLongo,
    InputLongo,
    DivLong,
    DivShort,
    InputShort,
    MasterDivShort,
    LabelRadio,
    LabelRadioLong,
    TituloLongoLabel,
    BottonEnviar,

} from './styles'


export default function Form() {


  const [linkWhats, setLinkWhats] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [nomePet, setNomePet] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [raca, setRaca] = useState("");
  const [sexo, setSexo] = useState("");
  const [castrado, setCastrado] = useState("");
  const [moradia, setMoradia] = useState("");
  const [racaoAtual, setRacaoAtual] = useState("");
  const [saude, setSaude] = useState("");
  const [alergia, setAlergia] = useState("");
  const [passeio, setPasseio] = useState("");
  const [tempoPasseio, setTempoPasseio] = useState("");
  const [ativoPassivo, setAtivoPassivo] = useState("");

  useEffect(() => {
    setLinkWhats("https://api.whatsapp.com/send?phone=5516996163774&text=Olá,%20meu%20nome%20é%20*"+nome+"*,%20preenchi%20o%20formulário%20sobre%20meu%20animalzinho!%20Segue%20os%20Dados:%0a%0a*Nome:*%20"+nome+"%0a*Email:*%20"+email+"%0a*Celular:*%20"+celular+"%0a*Nome do Pet:*%20"+nomePet+"%0a*Peso:*%20"+peso+"%0a*Idade:*%20"+idade+"%0a*Raça:*%20"+raca+"%0a*Sexo:*%20"+sexo+"%0a*Castrado?:*%20"+castrado+"%0a*Moradia:*%20"+moradia+"%0a*Ração Atual:*%20"+racaoAtual+"%0a*Problemas de Saúde:*%20"+saude+"%0a*Alergias:*%20"+alergia+"%0a*Passeios:*%20"+passeio+"%0a*Tempo de Passeio:*%20"+tempoPasseio+"%0a*Ele costuma ser mais:*%20"+ativoPassivo)
    console.log(linkWhats)
    console.log(sexo)
  }, [email, nome, sexo, celular, nomePet, peso, idade, raca, castrado, moradia, racaoAtual, saude, alergia, passeio, tempoPasseio, ativoPassivo]);

    // if (window.screen.width <= 500) {
    //     return (
    //         <HomeMobile />
    //     )
    // } else {
        return (
            <div>
                <header>

                    <Menu>
                        <Nav>
                            <NavTab>
                                <NavLi><Link href="/">Sobre</Link></NavLi>
                                <NavLi>Produtos</NavLi>
                                <NavLi>Contatos</NavLi>
                            </NavTab>
                            <ContatoTab>
                                <ContatoLi><RedeSocial src={face} /></ContatoLi>
                                <ContatoLi><RedeSocial src={insta} /></ContatoLi>
                            </ContatoTab>
                        </Nav>
                        <a href="/"><Logo src={logo01} /></a>
                    </Menu>
                </header>
                <Cabec />
                <Container>

                    <Formulario>
                        <TituloSobre>Dieta Personalizada</TituloSobre>
                        <TextForm>É muito importante sabermos o maior número de informações possíveis do seu pet. Com esses dados vamos fazer o levantamento de necessidade calórica, para montar a dieta perfeita!</TextForm>
                        <Dados>

                            <TituloSobreD>Perfil <ImagemText src={pata} /> </TituloSobreD>

                            <DivLong>
                            <TituloLongo>Seu Nome</TituloLongo>
                            <InputLongo placeholder="Seu Nome"
                                                    type="text"
                                                    value={nome}
                                                    onChange={e => setNome(e.target.value)}></InputLongo></DivLong>
                            <DivLong>
                            <TituloLongo>E-mail</TituloLongo>
                            <InputLongo placeholder="seu@email.com"
                                                    type="text"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}/></DivLong>
                            <DivLong>
                            <TituloLongo>Celular</TituloLongo>
                            <InputLongo placeholder="(DDD) 00000-0000"
                                                    type="text"
                                                    value={celular}
                                                    onChange={e => setCelular(e.target.value)}/></DivLong>
                            <DivLong>
                            <TituloLongo>Nome do Pet</TituloLongo>
                            <InputLongo placeholder="Pipoca"
                                                    type="text"
                                                    value={nomePet}
                                                    onChange={e => setNomePet(e.target.value)}/></DivLong>


                            <MasterDivShort>
                            <DivShort>
                            <TituloLongo>Peso Kg</TituloLongo>
                            <InputShort placeholder="Ex: 5,30"
                                                    type="text"
                                                    value={peso}
                                                    onChange={e => setPeso(e.target.value)}/></DivShort>
                            <DivShort>
                            <TituloLongo>Idade</TituloLongo>
                            <InputShort placeholder="Ex: 5 anos"
                                                    type="text"
                                                    value={idade}
                                                    onChange={e => setIdade(e.target.value)}/></DivShort></MasterDivShort>

                            <MasterDivShort>
                            <DivShort>
                            <TituloLongo>Raça</TituloLongo>
                            <InputShort placeholder="Digite a Raça"
                                                    type="text"
                                                    value={raca}
                                                    onChange={e => setRaca(e.target.value)}/></DivShort></MasterDivShort>

                            <MasterDivShort><DivShort>
                                <TituloLongoLabel>Sexo</TituloLongoLabel>
                                <LabelRadio><input type="radio" value="Macho" name="gender" onChange={e => setSexo(e.target.value)}/> Macho </LabelRadio>
                                <LabelRadio><input type="radio" value="Fêmea" name="gender" onChange={e => setSexo(e.target.value)}/> Fêmea </LabelRadio>
                                </DivShort><DivShort>
                                <TituloLongoLabel>Castrado</TituloLongoLabel>
                                <LabelRadio><input type="radio" value="Sim" name="castr" onChange={e => setCastrado(e.target.value)}/> Sim </LabelRadio>
                                <LabelRadio><input type="radio" value="Não" name="castr" onChange={e => setCastrado(e.target.value)}/> Não </LabelRadio>
                                </DivShort></MasterDivShort>

                                <DivLong>
                            <TituloLongoLabel>Moradia</TituloLongoLabel>
                                <LabelRadioLong><input type="radio" value="Casa" name="morad" onChange={e => setMoradia(e.target.value)}/> Casa </LabelRadioLong>
                                <LabelRadioLong><input type="radio" value="Apartamento" name="morad" onChange={e => setMoradia(e.target.value)}/> Apartamento </LabelRadioLong>
                                <LabelRadioLong><input type="radio" value="Sítio" name="morad" onChange={e => setMoradia(e.target.value)}/> Sítio </LabelRadioLong> </DivLong>

                            <TituloSobreD><ImagemText src={pata} /> Saúde </TituloSobreD>

                            <DivLong>
                            <TituloLongo>Qual a ração atual?</TituloLongo>
                            <InputLongo placeholder="Digite a ração atual" 
                                                    type="text"
                                                    value={racaoAtual}
                                                    onChange={e => setRacaoAtual(e.target.value)}/></DivLong>
                            <DivLong>
                            <TituloLongo>Problemas de Saúde</TituloLongo>
                            <InputLongo placeholder="Digite caso tenha problemas de saúde"
                                                    type="text"
                                                    value={saude}
                                                    onChange={e => setSaude(e.target.value)}/></DivLong>
                            <DivLong>
                            <TituloLongo>Alergias</TituloLongo>
                            <InputLongo placeholder="Digite caso possua alergias"
                                                    type="text"
                                                    value={alergia}
                                                    onChange={e => setAlergia(e.target.value)}/></DivLong>
                            
                            <DivLong>
                            <TituloLongoLabel>Passeios</TituloLongoLabel>
                                <LabelRadioLong><input type="radio" value="Nunca" name="pass" onChange={e => setPasseio(e.target.value)}/> Nunca </LabelRadioLong>
                                <LabelRadioLong><input type="radio" value="Semanalmente" name="pass" onChange={e => setPasseio(e.target.value)}/> Semanalmente </LabelRadioLong>
                                <LabelRadioLong><input type="radio" value="Diáriamente" name="pass" onChange={e => setPasseio(e.target.value)}/> Diáriamente </LabelRadioLong> </DivLong>
                            
                            <DivLong>    
                            <TituloLongo>Tempo de Passeio - Caso Passeie</TituloLongo>
                            <InputLongo placeholder="Ex: 1 hora"
                                                    type="text"
                                                    value={tempoPasseio}
                                                    onChange={e => setTempoPasseio(e.target.value)}/></DivLong>

                            <DivLong>
                            <TituloLongoLabel>Ele costuma ser mais:</TituloLongoLabel>
                                <LabelRadioLong><input type="radio" value="Ativo" name="ativ" onChange={e => setAtivoPassivo(e.target.value)}/> Ativo - corre, pula, brinca </LabelRadioLong>
                                <LabelRadioLong><input type="radio" value="Sedentário" name="ativ" onChange={e => setAtivoPassivo(e.target.value)}/> Sedentário </LabelRadioLong> </DivLong>

                        </Dados>

                        <LinkForm href={linkWhats} target="_blank"><BottonEnviar><p>Enviar</p></BottonEnviar></LinkForm>
                    </Formulario>
                </Container>

                <Cabec />
                <Container>
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
                                <ButtomFacebook><a href={face} target="blank"><ImgBackground src={face} /></a></ButtomFacebook>
                                <ButtomInsta><a href={insta} target="blank"><ImgBackground src={insta} /></a></ButtomInsta></ButtonsSocial>
                        </RedesSociais>

                        <Mapa>
                            <TitleFooter>Mapa</TitleFooter>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4421.6215132760635!2d-48.4983711737666!3d-21.2664921336997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9469f1921e797%3A0xc0ad2a5db95abcab!2sR.%20Adelino%20Buzinaro%20-%20Vila%20Sao%20Cristovao%2C%20Monte%20Alto%20-%20SP%2C%2015910-000!5e0!3m2!1spt-BR!2sbr!4v1612753029662!5m2!1spt-BR!2sbr" width="120%" height="250" frameborder="0" styles="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </Mapa>
                    </Footer>

                </Container>
            </div>
        );
    // }


}

