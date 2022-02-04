import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 260px;
  color: #fefefe;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  background-color:#FDBC37;
  padding: 24px 0;

  strong, span {
    font-weight: 700;
    width: 220px;
    text-align: center;
  }

  strong {
    font-size: 28px;
    font-weight: 700;
  }

  span {
    font-size: 46px;
    font-weight: 500;
  }
`;
