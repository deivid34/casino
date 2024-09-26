import React, { useState } from 'react';
import { Container, Content, Image, Aside, ContentButton, Overlay } from './styles';

import Tatu from '../../assets/tatu.png';
import { Button } from '../../components/Button'; 
import { MdSportsSoccer } from "react-icons/md";
import { MdOutlineCasino } from "react-icons/md";
import { Login } from '../Login'
import {Register} from '../Register'
import { Link } from 'react-router-dom'


export const Appbar = () => {
 
  const [showLogin, setShowLogin] = useState(false); // Estado para controlar o login
const [showRegister, setShowRegister] = useState(false);


  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleRegister = () => setShowRegister(!showRegister);

  return (
    <Container>

      <Content>
        <Image src={Tatu} alt="Tatu" />
        <h1>Bora</h1>
        <h2>bet</h2>
        <ContentButton>
        <Link to="/casino" >

          <Button icon={MdOutlineCasino} iconSize={18} >CASSINO</Button>
          </Link>
          <Button icon={MdSportsSoccer} iconSize={18}>ESPORTES</Button>
        </ContentButton>
        <Aside>
          <Button onClick={toggleLogin}>Entrar</Button>
          <Button  onClick={toggleRegister}>Cadastra-se</Button>
        </Aside>
      </Content>
      {showLogin && (
        <Overlay>
          <Login onClose={toggleLogin} /> {}
        </Overlay>
      )}
      {showRegister && (
        <Overlay>
          <Register onClose={toggleRegister}/>{}
        </Overlay>
      )}
    </Container>
  );
};
