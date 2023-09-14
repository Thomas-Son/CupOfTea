import { NavLink } from "react-router-dom";


function Header() {

    return (
        <header>

            <nav>
                <NavLink to={"/"}>accueil</NavLink>
                <NavLink to={"/api/v1/tea/all"}>thés</NavLink>
                <NavLink to={"/api/v1/about"}>notre histoire</NavLink>
                <NavLink to={"/api/v1/login"}>connexion</NavLink>
            </nav>

        </header>
    );
}

export default Header;