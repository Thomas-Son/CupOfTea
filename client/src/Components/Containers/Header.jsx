import { NavLink } from "react-router-dom";
import Ribbon from "./Ribbon"

function Header() {

    return (
        <header>

            <nav>
                <NavLink to={"/"}>accueil</NavLink>
                <NavLink to={"the"}>thés</NavLink>
                <NavLink to={"notre-histoire"}>notre histoire</NavLink>
                <NavLink to={"connexion"}>connexion</NavLink>
            </nav>

            <div class="ribbon">
                <Ribbon />
            </div>
            

        </header>
    );
}

export default Header;