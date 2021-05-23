import React from 'react';
import logo01 from '../../assets/logos/logo.png';
import whats from '../../assets/logos/whats.png'

import {
    Menu,
    Logo,
    Nav,
    NavTab,
    NavLi,
    ContatoTab,
    ContatoLi,
    RedeSocial,
    Link

} from '../home/styles'


export default function HeaderMenu() {

        return (
                    <Menu>
                        <Nav>
                            <NavTab>
                                <NavLi><Link href="/sobre">Sobre</Link></NavLi>
                                <NavLi><Link href="/form">Formulário</Link></NavLi>
                            </NavTab>
                            <ContatoTab>
                                <ContatoLi><RedeSocial src={whats} /></ContatoLi>
                            </ContatoTab>
                            <a href="/"><Logo src={logo01} /></a>
                        </Nav>
                    </Menu>
        );
    // }


}

