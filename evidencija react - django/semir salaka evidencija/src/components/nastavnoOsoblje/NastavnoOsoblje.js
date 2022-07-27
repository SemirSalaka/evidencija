import React from "react";
import Button from "../Button";
import { useState } from "react";
import "./NastavnoOsoblje.css";
import FormaDodajNovogKorisnika from "./FormaDodajNovogKorisnika";

const NastavnoOsoblje = () => {
  const [prikazFormeNovogKorisnika, setprikazFormeNovogKorisnika] =
    useState(false);

  const osoblje = [
    { ime: "Tarik", aktivnost: "neaktivan" },
    { ime: "Kenan", aktivnost: "aktivan" },
    { ime: "Semir", aktivnost: "na odmoru" },
    { ime: "Asim", aktivnost: "na bolovanju" },
  ];

  const CssAktivnost = (aktivnost) => {
    switch (aktivnost) {
      case "neaktivan":
        return "neaktivan";
      case "na odmoru":
        return "naOdmoru";
      case "na bolovanju":
        return "naBolovanju";
      default:
        return "aktivan";
    }
  };

  return (
    <div>
      <h1>Nastavno osoblje</h1>
      <p>(Profesori i asistenti)</p>
      <p>
        //ovdje treba bit filter za nastavno osoblje po semestru, predmetu,
        statusu korisnika
      </p>
      {osoblje.map((osoba, key) => {
        return (
          <div
            key={key}
            value={osoba.ime}
            className={CssAktivnost(osoba.aktivnost)}
          >
            <h2>{osoba.ime}</h2>
            <p>{osoba.aktivnost}</p>
          </div>
        );
      })}
      <Button
        text="Dodaj novog korisnika"
        onClick={() => {
          setprikazFormeNovogKorisnika(!prikazFormeNovogKorisnika);
        }}
      />
      {prikazFormeNovogKorisnika && <FormaDodajNovogKorisnika />}
    </div>
  );
};

export default NastavnoOsoblje;
