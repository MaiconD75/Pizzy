import { TableRow, TableRowProps } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  background-color: #4E5051;
  display: flex;
  
  form {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding-top: 80px;
    overflow-y: auto;
    
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #383d3d;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    
    h1 {
      margin-bottom: 40px;
      font-size: 64px;
    }

    strong {
      font: 400 16px Roboto, sans-serif;
      align-self: flex-start;
      margin: 20px 0 12px 30%;
      color: #DBE0DE;
    }

    button {
      width: 25%;
      margin: 0 30% 20px auto ;
      height: 50px;
      
      border: none;
      background-color: #FDBC37;
      border-radius: 8px;
      
      color: #fefefe;
    }
    
    > div {
      width: 40%;
      margin-bottom: 32px;
      
      input, label, p {
        color: #DBE0DE;
      }
      
      fieldset {
        border: 2px solid #DBE0DE;
      }
    }
  }
  `;

export const SelectRoleContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 400px;
    
    div.MuiDataGrid-virtualScroller {
      margin: 0 !important;
    }
    
    div.MuiDataGrid-columnHeaders, 
    div.MuiDataGrid-overlay {
      display: none;
      height: 0;
    }

    tbody {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      justify-content: flex-start;

      height: 296px;
      
      border: 2px solid #DBE0DE;
      border-radius: 4px;

      padding: 8px 0;
    }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
  width: 24px;

  > button {
    background-color: transparent !important;
    margin: 0 !important;
    width: 24px !important;
  }
`;

interface CustomTableRow extends TableRowProps {
  $isAdded?: boolean;
}

export const CustomTableRow = styled(TableRow)<CustomTableRow>`
  height: 28px;
  width: 100%;
  
  pointer-events: ${props => props.$isAdded ? 'none' : 'all'};

  > td {
    font: 400 16px Roboto, sans-serif;
    color: #DBE0DE;
    padding: 0;
    padding: 6px 4px;

    border-bottom: none;
    color: ${props => props.$isAdded && '#555'};
  }
`;
