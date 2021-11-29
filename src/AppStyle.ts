import { Button, Container } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const ContainerStyled = styled(Container)`
  * {
    padding: 0px;
    margin: 0px;
  }
  width: 100%;
  min-height: 100vh;
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  justify-content: center;
  border: 1px solid #000;

  h2 {
    margin-bottom: 10px;
  }
  .c-standard-requisition {
    margin-bottom: 50px;
  }

  .c-buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .c-post-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    input {
      width: 80px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #000;
    }
    div {
      gap: 10px;
      display: flex;
      flex-direction: row;
    }
  }

  .c-get-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    input {
      width: 80px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #000;
    }
    div {
      gap: 10px;
      display: flex;
      flex-direction: row;
    }
  }
`;

export const ButtonStyled = styled(Button)`
  margin-top: 10px;
  padding: 10px;
`;
