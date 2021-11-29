import { Button, Container } from "@material-ui/core";
import { styled } from "@material-ui/system";

export const ContainerStyled = styled(Container)`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 20px;

  h2 {
    margin-bottom: 10px;
  }

  .c-standard-requisition {
    max-width: 70%;

    div {
      text-align: start;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      .c-send-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        height: 40px;
        width: 100%;
      }
      .c-answer {
        text-align: center;
        background: #8d8d99;
        color: #fff;
        border: 1px solid #fff;
        padding: 10px;
        border-radius: 8px;
      }
    }

    div + div {
      margin-top: 20px;
    }
  }

  .c-custom-requisition {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      padding: 5px;
    }

    .c-answer {
      text-align: center;
      background: #8d8d99;
      color: #fff;
      border: 1px solid #fff;
      padding: 10px;
      border-radius: 8px;
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
  }
`;

export const ButtonStyled = styled(Button)`
  height: 40px;
  padding: 5px 10px;
  box-sizing: border-box;
`;
