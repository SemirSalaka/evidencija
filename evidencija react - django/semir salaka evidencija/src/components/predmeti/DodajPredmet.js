import React from "react";
import Dropdown from "../evidencijeOdrzaneNastave/Dropdown";
import Button from "../Button";

const DodajPredmet = () => {
  const nastavnici = ["Adis", "Kenan", "Tarik"];
  const asistenti = ["Faruk", "Alija", "Mahir"];
  return (
    <div>
      <h2>Dodaj predmet</h2>
      <form action="">
        <label>Unesi naziv predmeta:</label>
        <input type="text" placeholder="Predmet"/>
        <Dropdown text="Odaberi nastavnika" items={nastavnici} />
        <Dropdown text="Odaberi asistenta" items={asistenti} />
        <Button text="Dodaj" />
      </form>
    </div>
  );
};

export default DodajPredmet;
