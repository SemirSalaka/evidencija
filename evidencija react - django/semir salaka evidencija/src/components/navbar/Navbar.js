import Button from "../Button"
import './Navbar.css'
import { useHistory } from "react-router-dom";


const Navbar = ({userName, logout}) => {
    const history = useHistory();


    return (
        <div>

            <nav className='navbar'>
                <h1>Evidencija</h1>
                <div className='icon'>

                </div>
                <div className='space'></div>
                <ul>
                    <li><a >{userName}</a></li>
                    <li><a >status</a></li>
                    <Button onClick={logout}text="odjava"></Button>
                </ul>
                
                <Button/>
            </nav>
        </div>
    )
}

export default Navbar
