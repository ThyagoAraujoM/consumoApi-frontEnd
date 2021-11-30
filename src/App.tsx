import React, { useState } from "react";
import axios from "axios";
import { ContainerStyled, ButtonStyled } from "./AppStyle";

function App() {
  const [postStandartResponse, setPostStandartResponse] = useState("");
  const [getStandartResponse, setGetStandartResponse] = useState("");
  const [postCustomResponse, setPostCustomResponse] = useState("");
  const [getCustomResponse, setGetCustomResponse] = useState("");
  const [postDataN, setPostDataN] = useState("");
  const [postDataS, setPostDataS] = useState("");
  const [getData, setGetData] = useState(["", "", "", ""]);
  const URL = "https://consumo-api-back.herokuapp.com";
  function handleRequisitionPostStandart() {
    let listas = { salaN: [1, 5, 7, 8], salaS: ["a", "x", "n"] };
    axios
      .post(`${URL}/ordenaLista`, {
        listas,
      })
      .then((res) => {
        setPostStandartResponse(res.data.listas);
      });
  }

  function handleRequisitionGetStandart() {
    let data = { intervaloA: [20, 40], intervaloB: [10, 60] };

    axios.get(`${URL}/interlace`, { params: { data } }).then((res) => {
      console.log(res.data.validate);
      setGetStandartResponse(`${res.data.validate}`);
    });
  }

  function handleRequisitionPostCustom() {
    if (postDataN !== "" && postDataS !== "") {
      const salaN = postDataN.replace("-", "").split("");
      const salaS = postDataS.replace(/ /g, "").split("");
      let listas = { salaN, salaS };

      axios
        .post(`${URL}/ordenaLista`, {
          listas,
        })
        .then((res) => {
          setPostCustomResponse(res.data.listas);
        });
    }
  }

  function handleRequisitionGetCustom() {
    let data = {
      intervaloA: [getData[0], getData[1]],
      intervaloB: [getData[2], getData[3]],
    };

    axios.get(`${URL}/interlace`, { params: { data } }).then((res) => {
      console.log(res.data.validate);
      setGetCustomResponse(`${res.data.validate}`);
    });
  }

  return (
    <ContainerStyled>
      <h1> Escolha entre requisição pronta ou faça a sua própria</h1>
      <div className='c-standard-requisition'>
        <h2>Opções de requisição GET/POST predefinidas</h2>
        <div>
          <p>
            Primeira opção sendo requisição POST, onde manda dois valores e são
            retornados organizados em ordem numérica e alfabética.
          </p>
          <div className={"c-send-box"}>
            <p>Valores: salaN: [ 1, 5, 7, 8 ], salaS: [ “a”, “x”, “n” ]</p>
            <ButtonStyled
              variant='contained'
              onClick={() => {
                handleRequisitionPostStandart();
              }}>
              Enviar
            </ButtonStyled>
          </div>
          {postStandartResponse !== "" ? (
            <p className={"c-answer"}>
              Resultado: {JSON.stringify(postStandartResponse)}
            </p>
          ) : null}
        </div>

        <div>
          <p>
            Segunda sendo uma requisição GET, onde vai comparar dois arrays com
            2 valores numéricos e devolver true ou false se um dos valores de um
            array for igual a do outro.
          </p>
          <div className={"c-send-box"}>
            <p>Valores: intervaloA: [ 20, 40 ], intervaloB: [ 10, 60 ]</p>
            <ButtonStyled
              variant='contained'
              onClick={() => {
                handleRequisitionGetStandart();
              }}>
              Enviar
            </ButtonStyled>
          </div>
          {getStandartResponse !== "" ? (
            <p className={"c-answer"}>Resultado: {getStandartResponse}</p>
          ) : null}
        </div>
      </div>
      <div className={"c-custom-requisition"}>
        <h2>Personalizada</h2>
        <div className={"c-post-container"}>
          Tipo Post Primeiro campo apenas números e o segundo apenas letras
          <div>
            <input
              type='number'
              value={postDataN}
              onChange={(e) => {
                setPostDataN(e.target.value);
              }}
            />
            <input
              type='text'
              value={postDataS}
              onChange={(e) => {
                setPostDataS(e.target.value);
              }}
            />
          </div>
          {postCustomResponse !== "" ? (
            <p className={"c-answer"}>{JSON.stringify(postCustomResponse)}</p>
          ) : null}
          <ButtonStyled
            variant='contained'
            onClick={() => {
              handleRequisitionPostCustom();
            }}>
            Testar
          </ButtonStyled>
        </div>
        <div className={"c-get-container"}>
          Tipo GET Apenas números nos campos abaixo.
          <div>
            <input
              type='number'
              onChange={(e) => {
                let data = getData;
                data[0] = e.target.value;
                setGetData(data);
              }}
            />
            <input
              type='number'
              onChange={(e) => {
                let data = getData;
                data[1] = e.target.value;
                setGetData(data);
              }}
            />
          </div>
          <div>
            <input
              type='number'
              onChange={(e) => {
                let data = getData;
                data[2] = e.target.value;
                setGetData(data);
              }}
            />
            <input
              type='number'
              onChange={(e) => {
                let data = getData;
                data[3] = e.target.value;
                setGetData(data);
              }}
            />
          </div>
          {getCustomResponse !== "" ? (
            <p className={"c-answer"}> {getCustomResponse}</p>
          ) : null}
          <ButtonStyled
            variant='contained'
            onClick={() => {
              handleRequisitionGetCustom();
            }}>
            Testar
          </ButtonStyled>
        </div>
      </div>
    </ContainerStyled>
  );
}

export default App;
