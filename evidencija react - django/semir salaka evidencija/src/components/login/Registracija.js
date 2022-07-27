import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import DropdownMain from "../DropdownMain";

const Registracija = () => {
  const [Ime, setIme] = useState("");
  const [Prezime, setPrezime] = useState("");
  const [KorisnickoIme, setKorisnickoIme] = useState("");
  const [TipKorisnika, setTipKorisnika] = useState("");
  const [Aktivnost, setAktivnost] = useState("aktivan");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Password2, setPassword2] = useState("");
  const [success, setSuccess] = useState(false);
  const history = useHistory();

  const tipovi_korisnika = [
    "profesor",
    "asistent",
    "sef odsjeka",
    "dekan",
  ];
  const tipovi_aktivnosti = [
    "aktivan",
    "neaktivan",
    "na odmoru",
    "na bolovanju",
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    if (Password === Password2) {
      axios.post("http://127.0.0.1:8000/register/", {
            ime: Ime,
            prezime: Prezime,
            korisnickoIme: KorisnickoIme,
            email: Email,
            password: Password,
            aktivnost: Aktivnost,
            tip_korisnika: TipKorisnika,
          })
          .then(
            (response) => {              
              console.log(response);
              //window.location = "/login" 

              history.push("/login"); 
            },
            (error) => {
              console.log(error);
            }
          );
      } else {
        <h1>sifra nije ista</h1>;
      };
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Ime</label>
        <input
          type="text"
          placeholder="Ime"
          value={Ime}
          onChange={(e) => setIme(e.target.value)}
        />
        <label>Prezime</label>
        <input
          type="text"
          placeholder="Password"
          value={Prezime}
          onChange={(e) => setPrezime(e.target.value)}
        />

        <label>Korisnicko ime</label>
        <input
          type="text"
          placeholder="Korisnicko ime"
          value={KorisnickoIme}
          onChange={(e) => setKorisnickoIme(e.target.value)}
        />
        <DropdownMain state={TipKorisnika} onChange={(e) => setTipKorisnika(e.target.value)} text="Tip korisnika " items={tipovi_korisnika} />
        <DropdownMain state={Aktivnost} onChange={(e) => setAktivnost(e.target.value)} text="Aktivnost " items={tipovi_aktivnosti} />

        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Ponovljeni password</label>
        <input
          type="password"
          placeholder="Ponovi password"
          value={Password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button type="submit"> Register </button>
      </form>
    </div>
  );
};

export default Registracija;
