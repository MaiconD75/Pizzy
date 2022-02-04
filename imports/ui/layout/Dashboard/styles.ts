import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4E5051;
  display: flex;
  flex-direction: row;
`;

export const Menu = styled.div`
  width: 475px;
  height: 100vh;
  background-color: #383D3D;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font: 700 96px Quicksand, sans-serif;
    color: #FDBC37;
    padding: 16px;
    margin: 32px;
    width: 80%;
    text-align: center;

    border-bottom: 1px solid #DBE0DE;
  }
`;

export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  
`;

export const Item = styled.div`
  width: 240px;
  height: 64px;
  background-color: #FDBC37;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  margin-bottom: 32px;

  a {
    color: #FEFEFE;
    font-size: 36px;
    text-decoration: none;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 64px;
    transition: 0.2s;
  }

  &:hover {
      background-color: #EFB234;
    }
`;
