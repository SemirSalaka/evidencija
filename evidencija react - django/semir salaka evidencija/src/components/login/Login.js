import axios from "axios";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({setUserName, setLogin, setId, setTipKorisnika}) => {
  const [KorisnickoIme, setKorisnickoIme] = useState("");
  const [Password, setPassword] = useState("");
  const history = useHistory();

  function toRegister() {
    history.push("/register");
  }

  const onSubmit = (e) => {
    
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/login/", {
        korisnickoIme: KorisnickoIme,
        password: Password, 
      })
      .then(
        (response) => {
          console.log(response);
          //setKorisnickoIme(response.data.KorisnickoIme)
          console.log('ispis res' + response.data.pk);
          setTipKorisnika(response.data.fields.tip_korisnika);
          setUserName(response.data.fields.korisnicko_ime);
          setId(response.data.pk);
          
          setLogin(true);
          //window.location = "/pocetna"

          history.push("/pocetna");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Korisnicko ime</label>
        <input
          type="text"
          placeholder="Korisnicko ime"
          value={KorisnickoIme}
          onChange={(e) => setKorisnickoIme(e.target.value)}
        />
        <label>Password</label>
        <input
          type="text"
          placeholder="Korisnicki password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"> Login </button>
      </form>
      <button onClick={toRegister}>Registracija</button>
    </div>
  );
};

export default Login;
