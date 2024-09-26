
import React from 'react'
import Tatu from '../../assets/tatu.png';
import {Container, Content,Input,Form, Button, Image, HeaderWrapper, HeaderText} from './styles'
import { IoMdClose } from 'react-icons/io'

export const Register = ({onClose}) => {
  
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
              <h1>{'Faça cadastro em sua conta'}</h1>
              <Input
                type="text"
                placeholder="Endereço de email"
            
              
              />
              <Input
                type="password"
                placeholder="Senha"
                
              />


               <Input
                type="password"
                placeholder="CPF"
                
              />

              
             
              <Button >{'cadastre'}</Button>
              
            </Form>
          </Content>
        </Container>
      )
}