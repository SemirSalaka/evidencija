import React from "react";
import { useState, useEffect } from "react";
import Predmet from "./Predmet";
import PrikazPredmeta from "./PrikazPredmeta";
import axios from "axios";
/*
const predmetiA = [
  {
    naziv: "matematika",
    terminOdrzavanja: "22.3.2020",
    vrsta: "predavanje",
  },
  {
    naziv: "fizika",
    terminOdrzavanja: "25.2.2020",
    vrsta: "vjezbe",
  },
  {
    naziv: "biologija",
    terminOdrzavanja: "22.3.2020",
    vrsta: "predavanje",
  },
  {
    naziv: "matematika",
    terminOdrzavanja: "21.3.2020",
    vrsta: "vjezbe",
  },
  {
    naziv: "hemija",
    terminOdrzavanja: "26.7.2020",
    vrsta: "predavanje",
  },
];*/

const Pocetna = ({userName, tipKorisnika, id}) => {
  const [predmeti, setPredmeti] = useState([])

  const [prikazPredmeta, setprikazPredmeta] = useState(false);
  useEffect(() => {
    console.log(userName)
    console.log(tipKorisnika)
    axios.post("http://127.0.0.1:8000/getPredmeti/", {
            //userName: userName,
            tip_korisnika: tipKorisnika,
            id: id,
          })
          .then(
            (response) => {
              console.log(response.data)
              setPredmeti(response.data)
            },
            (error) => {
              console.log(error);
            }
          );
      }, [])
  return (
    <div>
      <h1>Pocetna</h1>
      <div>
        {predmeti.map((predmet, key) => {
          return (
            <Predmet
              key={key}
              prikazPredmeta={prikazPredmeta}
              naziv={predmet.fields.naziv}
              setprikazPredmeta={()=>{setprikazPredmeta(!prikazPredmeta)}}
              vrsta={predmet.vrsta}
            />
          );
        })}
      </div>
      {prikazPredmeta && <PrikazPredmeta/>}
    </div>
  );
};

export default Pocetna;
