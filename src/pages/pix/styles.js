import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative; /* Para permitir posicionamento absoluto do botão de fechar */
  
  button {
    height: 80px;
    width: 400px;
    margin-top: 30px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
   
  svg {
    transition: transform 0.3s ease, color 0.3s ease; /* Animação suave para hover */
  }
 &:hover svg {
    transform: scale(1.1); /* Aumenta o tamanho ligeiramente ao passar o mouse */
    color: ${({ theme }) => theme.primary}; /* Muda a cor ao passar o mouse, pode ser substituído por qualquer cor desejada */
  }
`;

export const Head = styled.div`
  margin-top: 100px;
  justify-content: center;
  display: flex;

  h1 {
    font-size: 80px;
    color: ${({ theme }) => theme.text};
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  background-color: rgba(0, 224, 145, 0.8);
  padding: 80px;
  border-radius: 10px;

  input {
    padding: 5px;
    margin-bottom: 15px;
    width: 600px;
  }

  h1 {
    font-size: 80px;
  }
`;

export const Content = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 60px;
`;
