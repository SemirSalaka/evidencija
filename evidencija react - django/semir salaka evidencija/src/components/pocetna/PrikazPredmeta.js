import React from "react";
import "./Pocetna.css"

const PrikazPredmeta = () => {
  const predmeti = [
    {
      sedmica: 1,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 2,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 3,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 4,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 5,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 6,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 7,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 8,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 9,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 10,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 11,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 12,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 13,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 14,
      datum: "22.3.2020",
      brojStudenata: 32,
    },
    {
      sedmica: 15,
      datum: "22.3.2020",
      brojStudenata: 32,
    }
  ];

  return (
    <div>
      {predmeti.map((predmet, key) => {
        return (
          <div className="prikazPredmeta" key={key}>
            <h1>{predmet.sedmica}</h1>
            <p>{predmet.datum}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PrikazPredmeta;
