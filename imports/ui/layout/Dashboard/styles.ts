import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: #4E5051;
  display: flex;
  flex-direction: row;
`;

export const Header = styled.header`
  height: 64px;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  background-color: #383D3D;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);

  button {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 16px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

export const SideBarButton = styled.button`
  left: 24px;

  svg {
    color: #DBE0DE;
  }
`;

export const LogOutButton = styled.button`
  right: 24px;

  svg {
    color: #b33924;
  }
`;

interface MenuProps {
  sideBarIsClose: boolean
}

export const Menu = styled.div<MenuProps>`
  width: 320px;
  height: 100%;
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

  ${props => props.sideBarIsClose && css`
      display: none;
  ` }
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
