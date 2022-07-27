import React from "react";
import Button from "../Button";
import ZahtjeviZaRadOdKuce from "./ZahtjeviZaRadOdKuce";
import FormaDodajRadOdKuce from "./FormaDodajRadOdKuce";
import { useState } from "react";

const Sef = () => {
  const [prikazFormeRadOdKuce, setprikazFormeRadOdKuce] = useState(false);
  const [prikazZahtjeva, setprikazZahtjeva] = useState(false);
  const zaposlenici = ["Damir", "Kenan", "Tarik", "Senad"];
  return (
    <div>
      <h2>Sef</h2>
      <div>
        {zaposlenici.map((zaposlenik, key) => {
          return (
            <div key={key} className="kartica">
              <h2 >{zaposlenik}</h2>
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
      <Button
        text="Odobri rad od kuće"
        onClick={() => {
          setprikazZahtjeva(!prikazZahtjeva);
        }}
      />
      {prikazZahtjeva && <ZahtjeviZaRadOdKuce />}
      {prikazFormeRadOdKuce && <FormaDodajRadOdKuce korisnik={"sef"} />}
    </div>
  );
};

export default Sef;
