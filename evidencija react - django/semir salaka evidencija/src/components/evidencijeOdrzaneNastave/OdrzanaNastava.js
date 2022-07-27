import React from "react";
import { useState } from "react";
import Button from "../Button";
import Dropdown from "./Dropdown";
import FormaNovaEvidencija from "./FormaNovaEvidencija";
import Predmet from "../pocetna/Predmet";
import "./OdrzanaNastava.css";

const OdrzanaNastava = () => {
  const predmeti = [
    {
      naziv: "matematika",
      terminOdrzavanja: "22.3.2020",
      vrsta: "predavanje",
    },
    {
      naziv: "fizika",
      terminOdrzavanja: "25.2.2020",
      vrsta: "vjezbe",
    },
    {
      naziv: "biologija",
      terminOdrzavanja: "22.3.2020",
      vrsta: "predavanje",
    },
    {
      naziv: "matematika",
      terminOdrzavanja: "21.3.2020",
      vrsta: "vjezbe",
    },
    {
      naziv: "hemija",
      terminOdrzavanja: "26.7.2020",
      vrsta: "predavanje",
    },
  ];

  const filterLista = ["predmet", "sedmica", "oblik"];

  const [prikazForme, setprikazForme] = useState(false);

  return (
    <div>
      <h1>Odrzana nastava</h1>
      <div>
        {predmeti.map((predmet, key) => {
          return (
            <div key={key} className="kartica">
              <h2 >{predmet.naziv}</h2>
              <p>{predmet.vrsta}</p>
            </div>
          );
        })}
      </div>
      <Dropdown text="Filtriraj po:" items={filterLista} />
      <Button text="Nova evidencija" onClick={()=>{setprikazForme(!prikazForme)}}/>
      {prikazForme && <FormaNovaEvidencija />}
    </div>
  );
};

export default OdrzanaNastava;
