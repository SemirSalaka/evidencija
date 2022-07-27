import React from "react";
import Sef from "./Sef";
import Korisnik from "./Korisnik";
import Dropdown from "../evidencijeOdrzaneNastave/Dropdown";
import IzmijeniPredmet from "./IzmijeniPredmet";

const Predmeti = () => {
  const sef = true;
  

  return (
    <div>
      <h1>Predmeti</h1>
      <p>//ovdje treba bit filter za predmete po semestrima, godinama, predmetima i nastavnom osoblju</p>
      {sef ? <Sef /> : <Korisnik />}
      {}
      
    </div>
  );
};

export default Predmeti;
