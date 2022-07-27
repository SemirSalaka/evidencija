import React from "react";
import Dropdown from "../evidencijeOdrzaneNastave/Dropdown";
import Button from "../Button";

const Korisnik = () => {
  const filteri = ["semestrima", "godinama", "predmetima", "nastavnom osoblju"];
  const predmeti = [
    {
      naziv: "matematika",
      terminPredavanja: "22.3.2020",
      terminVjezbi: "22.3.2020",
      profesor: "Adis",
      asistent: "Tarik"
    },
    {
      naziv: "fizika",
      terminPredavanja: "25.2.2020",
      terminVjezbi: "22.3.2020",
      profesor: "Adis",
      asistent: "Tarik"
    },
    {
      naziv: "biologija",
      terminPredavanja: "22.3.2020",
      terminVjezbi: "22.3.2020",
      profesor: "Adis",
      asistent: "Tarik"
    },
  ];

  return (
    <div>
      <h2>Korisnik</h2>
      <Dropdown text="Filtriraj predmete po" items={filteri} />
      {predmeti.map((predmet, key) => {
        return (
          <div key={key} className="predmeti">
            <h2>{predmet.naziv}</h2>
            <p>{predmet.terminPredavanja}</p>
            <p>{predmet.terminVjezbi}</p>
            <p>{predmet.profesor}</p>
            <p>{predmet.asistent}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Korisnik;
