import styled from 'styled-components';
export const Container = styled.div`
  background: ${({ theme }) => theme.quartet};
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  position: fixed;  /* Fixa o footer na parte de baixo */
  bottom: 0;        /* Coloca o footer no rodapé */
  left: 0;
  right: 0;
  text-align: center;
`;

export const Image = styled.img`
  width: 70px;
  margin-right: 5px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  h2 {
    color: #eab308;
    font-size: 35px;
  }
`;

export const IconContent = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterInfo = styled.div`
  text-align: center;
  font-size: 17px;
  margin-top: 10px;
  padding: 0 20px;
  line-height: 1.5;
  color: #ccc; /* Cor suave para diferenciar do restante */
`;


export const FooterPix = styled.div`
 display:flex;
align-items:center;
gap:5px;
`;
