import React from "react";
import Button from "../Button";

const ZahtjeviZaRadOdKuce = () => {
  const zahtjevi = [1, 2, 3, 4, 5];
  return (
    <form action="">
      <p>//doraditi prihvatanje i odbijanje zahtjeva</p>

      <ul>
        {zahtjevi.map((zahtjev, key) => {
          return (
            <li key={key}>
              {zahtjev}
              <Button text="Prihvati" />
              <Button text="Odbij" />
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default ZahtjeviZaRadOdKuce;
