import React from "react";
import Dropdown from "./Dropdown";

const FormaNovaEvidencija = () => {
  const predmeti = ["matematika", "fizika", "hemija"];

  const oblikNastave = [
    "Predavanja",
    "Vježbe",
    "Predavanja i Vježbe",
    "Laboratorijske vježbe",
    "Auditorne vježbe",
  ];

  var today = new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var dateTime = date + " " + time;

  return (
    <form>
      <h2>Forma za dodavanje nove evidencije</h2>
      <Dropdown text="Odaberi predmet:" items={predmeti} />
      <h1>{dateTime}</h1>
      <Dropdown text="Odaberi oblik nastave:" items={oblikNastave} />
      <p>
        //doraditi POCETAK NASTAVE: Default sadasnje vrijeme ili ako je
        definisan pocetak nastave za predmet
      </p>
      <p>
        //doraditi KRAJ NASTAVE: Default sadasnje vrijeme ili ako je definisan
        kraj nastave za predmet
      </p>
      <label>Unesi broj prisutnih stuenata:</label>
      <input type="number" placeholder="Broj prisutnih studenata"/>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormaNovaEvidencija;
