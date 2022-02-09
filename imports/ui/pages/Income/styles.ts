import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;

  padding: 60px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  overflow-y: auto;

  > strong {
    color: #DBE0DE;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  > canvas {
    margin-top: 32px;
    width: 100% !important;
  }
`;
