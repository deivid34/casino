
import React from 'react'
import Tatu from '../../assets/tatu.png';
import {Container, Content,Input,Form, Button, Image, HeaderWrapper, HeaderText} from './styles'
import { IoMdClose } from 'react-icons/io'


export const Login = ( {onClose}) => {
    
  return (
    <Container>
      <Content>
        <Form>

          <IoMdClose
            size={15}
            color="white"
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          />
              <HeaderWrapper>
    
       <HeaderText>
        <h1>Bora</h1>
        <h2>Bet</h2>
        </HeaderText>
        <Image src={Tatu} alt="Tatu" />
        </HeaderWrapper>
          <h1>{'Faça login em sua conta'}</h1>
          <Input
            type="text"
            placeholder="CPF ou endereço de email"
        
          
          />
          <Input
            type="password"
            placeholder="Senha"
            
          />
         
          <Button >{'Entrar'}</Button>
          
        </Form>
      </Content>
    </Container>
  )
}