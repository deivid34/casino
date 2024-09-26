import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.primary};
    height: 100vh;
  flex: 1; /* Faz com que o Content ocupe o espaço restante */

`

export const Form = styled.div`
 display:flex;
 gap:1000px;
justify-content:center;
align-items:center;
margin-top:20rem;

`

export const Image = styled.img`
  width: 300px; /* Define a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  border-radius:3px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
 
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const Imagegroup = styled.div`
display:flex;
  flex-direction: column;
  Button{margin-top:10px;
  height:50px;
  width:150px;}
`;

export const Imageset = styled.div`
display:flex;
  flex-direction: column;
    Button{margin-top:10px;
    height:50px;
  width:150px;}
`;