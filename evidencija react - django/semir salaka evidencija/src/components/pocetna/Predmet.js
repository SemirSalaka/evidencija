import React from 'react'
import Button from '../Button'
import './Pocetna.css'

const Predmet = ({setprikazPredmeta, naziv, terminOdrzavanja, vrsta}) => {
    return (
        <div className="kartica">
            <h3>{naziv}<Button onClick={setprikazPredmeta} text="pregled"/></h3>
            <p>{terminOdrzavanja}</p>
            <p>{vrsta}</p>
        </div>
    )
}

export default Predmet
