import React from 'react';

import sobre1 from '../../assets/images/sobre1.jpg';
import sobre2 from '../../assets/images/sobre2.jpg';
import sobre3 from '../../assets/images/sobre3.jpg';

import Footer from '../footer/footer'
import HeaderMenu from '../header/header'

import { Container } from '../home/styles'

import {
    Cabec,
    Cards,
    Card,
    DivImg,
    ImagemSobre,
    Content,
    Title,
    SobreText
} from './styles'


export default function Sobre() {

        return (
            <div>
                <header>                  
                    <HeaderMenu/>
                </header>
                <Cabec colorProp={'#97c56a'}/>
                <Container>

                    <Cards>
                        <Card>
                            <DivImg><ImagemSobre src={sobre1}/></DivImg>
                            <Content>
                                <Title>Excelente Comida Para Animais</Title>
                                <SobreText>Nossa receita de sucesso é preparer comidas deliciosas. saudáveis e nutritivas para os amiguinhos de quatro patas! Tudo fresquinho sem conservantes, feito de forma caseira. É assim que a Sol Pet Food trabalha em Jaboticabal. Se quiser saber mais, entre em contato conosco.</SobreText>
                            </Content>
                        </Card>
                        <Card>
                            <DivImg><ImagemSobre src={sobre2}/></DivImg>
                            <Content>
                                <Title>Excelente Comida Para Animais</Title>
                                <SobreText>Nossa receita de sucesso é preparer comidas deliciosas. saudáveis e nutritivas para os amiguinhos de quatro patas! Tudo fresquinho sem conservantes, feito de forma caseira. É assim que a Sol Pet Food trabalha em Jaboticabal. Se quiser saber mais, entre em contato conosco.</SobreText>
                            </Content>
                        </Card>
                        <Card>
                            <DivImg><ImagemSobre src={sobre3}/></DivImg>
                            <Content>
                                <Title>Excelente Comida Para Animais</Title>
                                <SobreText>Nossa receita de sucesso é preparer comidas deliciosas. saudáveis e nutritivas para os amiguinhos de quatro patas! Tudo fresquinho sem conservantes, feito de forma caseira. É assim que a Sol Pet Food trabalha em Jaboticabal. Se quiser saber mais, entre em contato conosco.</SobreText>
                            </Content>
                        </Card>
                    </Cards>
                   
                </Container>

                <Cabec colorProp={'#97c56a'} />
                <Container>
                    <Footer/>
                </Container>
            </div>
        );


}

