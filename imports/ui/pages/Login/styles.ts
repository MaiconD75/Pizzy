import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4E5051;
  position: relative;

  > form {
    height: 100vh;
    width: 30vw;
    position: absolute;
    right: calc(50vw - 15vw);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #383d3d;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    padding: calc(50vh - 240px) 8vw calc(50vh - 160px);

    flex-direction: column;


    h1 {
      font: 700 96px Quicksand, sans-serif;
      color: #FDBC37;
      text-align: center;
    }

    > div {
      width: 100%;
    }

    button {
      width: 40%;
      margin-left: 60%;
      height: 50px;

      border: none;
      background-color: #FDBC37;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      
      color: #fefefe;
    }
  }

  

  input, label, p {
    color: #DBE0DE;
  }

  fieldset {
    border: 2px solid #DBE0DE;
  }
`;
