import React from "react";
import Button from "../Button";
import FormaPromijeniPodatke from "./FormaPromijeniPodatke";
import { useState } from "react";

const Postavke = () => {
  const [prikazPromijeni, setprikazPromijeni] = useState(false);

  const korisnik = {
    ime: "Semir",
    prezime: "Salaka",
    korisnickoIme: "sema98",
    slika: "slika",
    status: "aktivan",
    tip: "profesor",
  };

  return (
    <div>
      <h1>Postavke</h1>
      <h2>{korisnik.ime}</h2>
      <h2>{korisnik.prezime}</h2>
      <h2>{korisnik.korisnickoIme}</h2>
      <h2>{korisnik.slika}</h2>
      <h2>{korisnik.status}</h2>
      <h2>{korisnik.tip}</h2>

      <Button
        text="Promijeni"
        onClick={() => {
          setprikazPromijeni(!prikazPromijeni);
        }}
      />
      {prikazPromijeni && <FormaPromijeniPodatke />}
    </div>
  );
};

export default Postavke;
