import React from "react";
import Dropdown from "../evidencijeOdrzaneNastave/Dropdown";
import Checkbox from "../Checkbox";

const FormaDodajRadOdKuce = ({ korisnik }) => {
  const osoblje = ["Damir", "Kenan", "Tarik", "Senad"];
  const aktivnostNastavnogOsoblja = [
    "priprema ispita",
    "ispravljanje ispita",
    "NI rad",
    "rad na disertaciji",
    "online konsultacije",
    "ostalo",
  ];
  var today = new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  var dateTime = date + " " + time;

  return (
    <form action="">
      {korisnik != "korisnik" && (
        <Dropdown text="Nastavno osobolje:" items={osoblje} />
      )}
      <p>{date}</p>
      <div>
        {aktivnostNastavnogOsoblja.map((aktivnost, key) => {
          return <Checkbox key={key} label={aktivnost} />;
        })}
      </div>
    </form>
  );
};

export default FormaDodajRadOdKuce;
