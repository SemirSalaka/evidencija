import React from "react";
import "./ZahtjeviZaRadOdKuce.css";
import FormaDodajRadOdKuce from "./FormaDodajRadOdKuce";
import { useState } from "react";
import Button from "../Button";

const Korisnik = () => {
  const [prikazFormeRadOdKuce, setprikazFormeRadOdKuce] = useState(false);
  const zahtjevi = [
    { naziv: "zahtjev 1", prihvatanje: "prihvacen" },
    { naziv: "zahtjev 2", prihvatanje: "odbijen" },
    { naziv: "zahtjev 3", prihvatanje: "prihvacen" },
    { naziv: "zahtjev 4", prihvatanje: "odbijen" },
  ];

  return (
    <div>
      <h2>Korisnik</h2>
      <div>
        {zahtjevi.map((zahtjev, key) => {
          return (
            <div
              key={key}
              className={`kartica  + ${
                zahtjev.prihvatanje == "prihvacen"
                  ? "zahtjevPrihvacen"
                  : "zahtjevOdbijen"
              }`}
            >
              <h2>{zahtjev.naziv}</h2>
              <p>{zahtjev.prihvatanje}</p>
            </div>
          );
        })}
      </div>
      <Button
        text="Dodaj rad od kuće"
        onClick={() => {
          setprikazFormeRadOdKuce(!prikazFormeRadOdKuce);
        }}
      />
      {prikazFormeRadOdKuce && <FormaDodajRadOdKuce korisnik={"korisnik"} />}

    </div>
  );
};

export default Korisnik;
