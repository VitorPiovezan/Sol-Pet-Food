import React, {useEffect, useState} from 'react';

import banner01 from '../../../assets/banners/banner-site.jpg';
import logo01 from '../../../assets/logos/logo.png';
import face from '../../../assets/logos/face.png';
import insta from '../../../assets/logos/insta.png';
import textimg1 from '../../../assets/images/Ativo2bigode.png';
import produto from '../../../assets/images/Lata_exemplo.png';
import dogcell from '../../../assets/images/cachorrocelular.png';
import whats from '../../../assets/logos/whats.png'
import pata from '../../../assets/images/fg.png';

import {
  Contato,
  TitleContato,
  Img1,
  ImputNome,
  ButtomWhats,
  ImgBackground,
  ButtomFace,
  FormContatoCelular,
  TextBoxCelular
  

} from './styles'



export default function HomeMobile() {

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
        <Contato>
            <FormContatoCelular>
              <TitleContato><Img1 src={pata}/>Entre em Contato</TitleContato>
                <ImputNome placeholder="Seu Nome" type="text"
                                                  value={nome}
                                                  onChange={e => setNome(e.target.value)}></ImputNome>
                <ImputNome placeholder="Seu Email"type="text"
                                                  value={email}
                                                  onChange={e => setEmail(e.target.value)}></ImputNome>
                <TextBoxCelular placeholder="Sua Mensagem"type="text"
                                                  value={mensagem}
                                                  onChange={e => setMensagem(e.target.value)}></TextBoxCelular>
                <ButtomWhats><a href={linkWhats} target="blank"><ImgBackground src={whats}/></a></ButtomWhats>
                <ButtomFace><ImgBackground /></ButtomFace>
            </FormContatoCelular>
          </Contato>
      </div>
      ) 

  
}