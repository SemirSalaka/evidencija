import React from 'react'
import Button from '../Button'

const IzmijeniPredmet = ({predmet}) => {
    return (
        <div>
            <h2>Trenutni podaci predmeta {predmet}</h2>
            <p>//neki podaci sad idu prosljedjenog predmeta</p>
            <h1>Izmjena predmeta{predmet}</h1>
            <label>Naziv</label>
            <input type="text" />
            <label>Nastavnik</label>
            <input type="text" />
            <label>Asistent</label>
            <input type="text" />
            <Button text="Spasi"/>
        </div>
    )
}

export default IzmijeniPredmet
