import { Container, Head, Form, Content, CloseButton } from './styles';
import { FaPix } from "react-icons/fa6";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'


export const Pix = () => {
  return (
    <Container>
      <CloseButton>
      <Link to="/" >
        <IoMdClose size={40} color="white" />
        </Link>

      </CloseButton>

      <Content>
        <Head>
          <h1>pix <FaPix color="#00E091" /></h1>
        </Head>
        <Form>
          <Input type="text" name="ChavePix" placeholder="CPF" />
          <Input type="number" name="valor" placeholder="Digite o valor" />
          <Input type="number" name="confirmacaoValor" placeholder="Confirme o valor" required />
          <Input type="password" name="senha" placeholder="Digite sua senha" />
        </Form>
        <Button>pagar</Button>
      </Content>
    </Container>
  );
};
