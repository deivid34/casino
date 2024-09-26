import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 10px 1px;
  height: 100px;
  justify-content: space-between; /* Adiciona espaçamento entre os elementos */
  align-items: center; /* Centraliza verticalmente */
  z-index: 10;
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.text};

  h1 {
    color: #ffffff;
    margin: 0;
    font-size: 60px;
  }

  > svg {
    position: absolute;
    left: 32px;
    color: white;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  h2 {
    color: #eab308;
    margin-left: 2px;
    font-size: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left:100px;
`;

export const Image = styled.img`
  width: 70px;
  margin-right: 5px;
`;

export const Aside = styled.div`
  padding: 15px 20px;
  color: white;
display: flex;
gap:10px;
margin-right:15px;
  margin-left: auto; /* Mover o botão para o lado direito */
  Button{
   height:50px;
   width:150px;
   font-size: 20px;
 white-space: nowrap;

}
`;


export const ContentButton = styled.div`
 display: flex;

  margin-left: 150px;
   Button{  
   background-color: ${({ noBackground }) => (noBackground ? 'transparent' : ' #111921')}; 
height:95px;
   &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: red;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }

  /* Animação ao passar o mouse */
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

   font-size: 15px;
 white-space: nowrap;

}
`;


export const Overlay = styled.div`
  position: absolute; /* Adiciona essa linha */
  top: 0; /* Adiciona essa linha */
  left: 0; /* Adiciona essa linha */
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Garante que o overlay fique sobreposto */
`
