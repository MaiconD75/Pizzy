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

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const PizzaTable = styled.table`
  width: 100%;
  height: 100%;
  margin-top: 52px;
  border-radius: 4px;
  background-color: #383D3D;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  tr {
    display: block;
  }
  
  thead {
    height: 40px;

    th {
      min-width: 240px;

      p{
        color: #fefefe;
        font-size: 24px;
        font-weight: 700;
      }
    }
    
    th:first-child {
      text-align: left;
      width: 100%;
    }
  }

  tbody {
    td {
      min-width: 240px;
      
      p{
        color: #DBE0DE;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
    }
    
    td:first-child {
      text-align: left;
      width: 100%;

      p{
        text-align: left;
      }
    }
  }
`;
