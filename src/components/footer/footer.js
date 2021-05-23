
import face from '../../assets/logos/face.png';
import insta from '../../assets/logos/insta.png';

import {
    ImgBackground,
    Footer,
    Atendimento,
    TitleFooter,
    TextFooter,
    RedesSociais,
    ButtomFacebook,
    ButtomInsta,
    Mapa,
    B,
    ButtonsSocial,

} from '../home/styles'

export default function () {
        return (
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
                  <TitleFooter style={{paddingLeft: "20px"}}>Mapa</TitleFooter>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4421.6215132760635!2d-48.4983711737666!3d-21.2664921336997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9469f1921e797%3A0xc0ad2a5db95abcab!2sR.%20Adelino%20Buzinaro%20-%20Vila%20Sao%20Cristovao%2C%20Monte%20Alto%20-%20SP%2C%2015910-000!5e0!3m2!1spt-BR!2sbr!4v1612753029662!5m2!1spt-BR!2sbr" width="350" height="250" frameborder="0" styles="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </Mapa>
              </Footer>
        );


}

