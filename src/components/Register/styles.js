// src/pages/styles.js

import styled from 'styled-components'

export const Container = styled.div`

  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px;
  border-radius: 4px;

    background: ${({ theme }) => theme.primary};
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
width:300px;
 height:300px;
  h1{  font-size: 20px;
  margin-bottom:15px;
  color:#eef2ff;}
   font-family: 'Poppins', sans-serif;

   
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`

export const Button = styled.button`
  padding: 10px;
  background:#eab308 ;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top:10px;

  &:hover {
    background: ${({ theme }) => theme.primaryHover};
  }
`


export const Image = styled.img`
  width: 40px;
  margin-right: 5px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
justify-content:center;

`;

export const HeaderText = styled.div`
  display: flex;
gap:5px;
align-items:center;
  
  h1 {
    font-size: 20px;
    margin: 0; /* removendo a margem padrão */
    color: #eef2ff;
     font-family: 'Poppins', sans-serif;
  }

  h2 {
    font-size: 20px; /* ajuste o tamanho conforme necessário */
    margin: 0; /* removendo a margem padrão */
    color: #eab308;
       

  }
`;
