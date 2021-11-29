import React, { useState } from "react";
import axios from "axios";
import { ContainerStyled, ButtonStyled } from "./AppStyle";

function App() {
  const [postStandartResponse, setPostStandartResponse] = useState();
  const [getStandartResponse, setGetStandartResponse] = useState("");
  const [postCustomResponse, setPostCustomResponse] = useState();
  const [getCustomResponse, setGetCustomResponse] = useState("");
  const [postDataN, setPostDataN] = useState("");
  const [postDataS, setPostDataS] = useState("");
  const [getData, setGetData] = useState(["", "", "", ""]);

  function handleRequisitionPostStandart() {
    let listas = { salaN: [1, 5, 7, 8], salaS: ["a", "x", "n"] };
    axios
      .post("http://localhost:8080/ordenaLista", {
        listas,
      })
      .then((res) => {
        setPostStandartResponse(res.data.listas);
      });
  }

  function handleRequisitionGetStandart() {
    let data = { intervaloA: [20, 40], intervaloB: [10, 60] };

    axios
      .get("http://localhost:8080/interlace", { params: { data } })
      .then((res) => {
        console.log(res.data.validate);
        setGetStandartResponse(`${res.data.validate}`);
      });
  }

  function handleRequisitionPostCustom() {
    if (postDataN !== "" && postDataS !== "") {
      const salaN = postDataN.split("");
      const salaS = postDataS.replace(/ /g, "").split("");
      let listas = { salaN, salaS };

      axios
        .post("http://localhost:8080/ordenaLista", {
          listas,
        })
        .then((res) => {
          setPostCustomResponse(res.data.listas);
        });
    }
  }

  function handleRequisitionGetCustom() {
    let data = {
      intervaloA: [Number(getData[0]), Number(getData[1])],
      intervaloB: [Number(getData[2]), Number(getData[3])],
    };

    axios
      .get("http://localhost:8080/interlace", { params: { data } })
      .then((res) => {
        console.log(res.data.validate);
        setGetCustomResponse(`${res.data.validate}`);
      });
  }

  return (
    <ContainerStyled>
      <h1> Escolha entre requisição pronta ou faça a sua própria</h1>
      <div className='c-standard-requisition'>
        <div>
          <h2>Opções de requisição GET/POST predefinidas</h2>
          <p>
            Primeira opção sendo requisição POST, onde manda dois valores e são
            retornados organizados em ordem numérica e alfabética.
          </p>
          {postStandartResponse !== null ? (
            <p>{JSON.stringify(postStandartResponse)}</p>
          ) : null}
          <ButtonStyled
            variant='contained'
            onClick={() => {
              handleRequisitionPostStandart();
            }}>
            salaN: [ 1, 5, 7, 8 ], salaS: [ “a”, “x”, “n” ]
          </ButtonStyled>
        </div>
        <div>
          <p>
            Segunda sendo uma requisição GET, onde vai comparar dois arrays com
            2 valores numéricos e devolver true ou false se um dos valores de um
            array for igual a do outro.
          </p>
          {getStandartResponse !== null ? <p> {getStandartResponse}</p> : null}
          <ButtonStyled
            variant='contained'
            onClick={() => {
              handleRequisitionGetStandart();
            }}>
            intervaloA: [ 20, 40 ], intervaloB: [ 10, 60 ]
          </ButtonStyled>
        </div>
      </div>
      <div>
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
          {postCustomResponse !== null ? (
            <p>{JSON.stringify(postCustomResponse)}</p>
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
          {getCustomResponse !== null ? <p> {getCustomResponse}</p> : null}
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
