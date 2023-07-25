import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { StyledNavLogged } from "../NavLogged/style";

export const NavLogged = () => {
    const { user, handleLogout } = useContext(UserContext);

    return (
        <StyledNavLogged>
            <Link to="/"> Inicio </Link>
            <Link to="/new-report"> Novo relato </Link>
            <Link to={`/dashboard/${user && user.id}`}> Perfil </Link>
            <button onClick={() => handleLogout()}> Deslogar </button>
        </StyledNavLogged>
    );
};
