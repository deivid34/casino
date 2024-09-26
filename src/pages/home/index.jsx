import React from 'react';
import { Appbar } from '../../components/Appbar';
import Tatuzinho from '../../assets/tatubet.png';
import { Button } from '../../components/Button'; 
import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer'; // Certifique-se que o caminho está correto

import { Container, Content, Image, Form, ImageContent, Aside } from './styles';

export const Home = () => {
  return (
    <Container>
      <Appbar />
      <Content>
        <Form>
          <Aside>
            <h1>Bonus de até mil Reais <br /> jogue agora</h1>
            <Link to="/pix">
              <Button>Da dinheiro burro</Button>
            </Link>
          </Aside>
          <ImageContent>
            <Image src={Tatuzinho} alt="Tatuzinho" />
          </ImageContent>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
};
