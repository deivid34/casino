import React from 'react';
import { Container, Image, Form, IconContent, FooterInfo, FooterPix } from './styles';
import Tatu from '../../assets/tatu.png';
import { CiInstagram } from "react-icons/ci";
import { FaPix } from "react-icons/fa6";

export const Footer = () => {
  return (
    <Container>
      <Form>
        <h1>Bora</h1>
        <h2>Bet</h2>
        <Image src={Tatu} alt="Tatu" />
      </Form>

      <FooterInfo>
        <p>
          BoraBet pertence e é operado pela Prolific Trade N.V., número de registro: 150731, endereço registrado: Groot Kwartierweg 10, Willemstad, Curaçao. A empresa agente de pagamento é Horangi Trading Limited com endereço Chytron, 30, 2nd floor, Flat/Office A22, 1075, Nicósia, Chipre e número de registro: ΗΕ 411494.
          O jogo pode ser viciante. BoraBet aceita apenas clientes maiores de 18 anos.
        </p>
      </FooterInfo>

      <FooterPix><h2>pagamento:</h2> <FaPix size={25}/> </FooterPix>

      <IconContent>
        <CiInstagram size={35} />
      </IconContent>
    </Container>
  );
};
