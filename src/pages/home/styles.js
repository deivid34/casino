
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o container ocupe toda a altura da tela */
  background: ${({ theme }) => theme.primary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1; /* Faz com que o Content ocupe o espaço restante */
  h1 {
    color: white;
    font-size: 70px;
  }
`;

export const Image = styled.img`
  margin-left: -160px;
  border-radius: 100px;
  margin-bottom: 50px;
`;

export const ImageContent = styled.div`
  margin-left: -160px;
  width: 500px;
  height: 500px;
`;

export const Form = styled.div`
  display: flex;
  margin-top: -150px;
  align-items: center;
  border-bottom: 1px solid #fff; /* Cor e espessura da linha apenas na parte de baixo */
  gap: 350px;
`;

export const Aside = styled.div`
  flex-direction: column;
  padding: 0;

  a {
    margin-top: 20px;
  }

  button {
  margin-top:20px;
    padding: 10px;
  }
`;