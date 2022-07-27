import React from "react";
import Button from "../Button";
import DodajPredmet from "./DodajPredmet";
import { useState } from "react";
import IzmijeniPredmet from "./IzmijeniPredmet";
import "./Predmeti.css";

const Sef = () => {
  const [dodajPredmet, setdodajPredmet] = useState(false);
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
  return (
    <div>
      <h2>Sef</h2>
      <div>
        <p>
          //na klik izmjene otvoriti novi prozor i proslijediti podatke o tom
          predmetu
        </p>
        {predmeti.map((predmet, key) => {
          return (
            <div className="predmeti">
              <h2 key={key}>{predmet.naziv}</h2>
              <Button text="Izmijeni" />
              <Button text="Ibrisi" />
            </div>
          );
        })}
      </div>
      <Button
        text="Dodaj predmet"
        onClick={() => {
          setdodajPredmet(!dodajPredmet);
        }}
      />
      {dodajPredmet && <DodajPredmet />}
      <IzmijeniPredmet />
    </div>
  );
};

export default Sef;
