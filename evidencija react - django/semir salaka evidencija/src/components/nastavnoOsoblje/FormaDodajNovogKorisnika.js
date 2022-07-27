import React from "react";
import Dropdown from "../evidencijeOdrzaneNastave/Dropdown";

const FormaDodajNovogKorisnika = () => {
  const TipKorisnika = ["profesor", "assistant", "šef odsjeka", "dekan"];

  return (
    <div>
      <h2>Dodaj novog korisnika:</h2>
      <form action="">
        <Dropdown text="Odaberi tip korisnika:" items={TipKorisnika} />
        
        <label >Unesi ime:</label>
        <input></input>
        <label >Unesi Prezime:</label>
        <input></input>
        <p>//jos neki podaci vezani za korisnike</p>
      </form>
    </div>
  );
};

export default FormaDodajNovogKorisnika;
