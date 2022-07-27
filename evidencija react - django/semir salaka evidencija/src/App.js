import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Pocetna from "./components/pocetna/Pocetna";
import OdrzanaNastava from "./components/evidencijeOdrzaneNastave/OdrzanaNastava";
import RadOdKuce from "./components/evidencijaRadaOdKuce/RadOdKuce";
import Predmeti from "./components/predmeti/Predmeti";
import NastavnoOsoblje from "./components/nastavnoOsoblje/NastavnoOsoblje";
import Postavke from "./components/postavke/Postavke";
import Stil from "./components/stil/Stil";
import "./index.css";
import "./App.css";
import Login from "./components/login/Login";
import register from "./components/login/Registracija";
import Registracija from "./components/login/Registracija";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();

  {
    /*function callPostMethod(){
    axios.post('http://127.0.0.1:8000/aplikacija/profesori/', {
      firstName: 'Ime',
      lastName:'Prezime'
    }).then(
      (response)=>{
        console.log(response)
      },
      (error)=>{
        console.log(error)
      }
    )
  }*/
  }

  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [tipKorisnika, setTipKorisnika] = useState("");
  const [id, setId] = useState(0);

  var sef = false;

  function logout() {
    sef = false;
    setUserName("");
    setTipKorisnika("");
    setLogin(false);
    setId("");
    window.location = "/login" 

    //history.push("/login");
  }

  if (tipKorisnika === "dekan" || tipKorisnika === "sef odsjeka") {
    sef = true;
  }

  return (
    <Router>
      <div className="">
        {login && <Navbar logout={logout} userName={userName} />}

        <div className="sadrzaj">
          {login && <Sidebar sef={sef} />}
          {/*<Pocetna/>*/}
          {/*<OdrzanaNastava/>*/}
          {/*<RadOdKuce/>*/}
          {/*<Predmeti/>*/}
          {/*<NastavnoOsoblje/>*/}
          {/*<Postavke />*/}
          {/*<Stil/>*/}
          <Switch>
            <Route path="/login">
              <Login
                history = {history}
                setUserName={setUserName}
                setLogin={setLogin}
                setId={setId}
                setTipKorisnika={setTipKorisnika}
              />
            </Route>
            <Route exact path="/">
              <Login
                setUserName={setUserName}
                setLogin={setLogin}
                setId={setId}
                setTipKorisnika={setTipKorisnika}
              />
            </Route>
            <Route path="/register" component={Registracija} />
            <Route path="/pocetna"><Pocetna id={id} userName={userName} tipKorisnika={tipKorisnika}/></Route>
            <Route path="/odrzanaNastava" exact component={OdrzanaNastava} />
            <Route path="/radOdKuce" component={RadOdKuce} />
            <Route path="/predmeti" component={Predmeti} />
            <Route path="/nastavnoOsoblje" component={NastavnoOsoblje} />
            <Route path="/postavke" component={Postavke} />
            <Route path="/stil" component={Stil} />
          </Switch>
        </div>
        {/*<button onClick={callPostMethod}>Post</button>*/}
      </div>
    </Router>
  );
};

export default App;
