import { StyledHeader } from "./style";
import logoImg from "../../assets/logo-white.svg";
import { NavUnlogged } from "../NavUnlogged";
import { NavLogged } from "../NavLogged";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { SearchForm } from "../SearchForm";

export const Header = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [visible, setVisible] = useState("hidden");
    const goToHome = () => {
        navigate("/");
    };

    const menuVisibility = () => {
        visible == "hidden" ? setVisible("visible") : setVisible("hidden");
    };

    return (
        <StyledHeader>
            <>
                <img
                    src={logoImg}
                    alt=""
                    onClick={() => {
                        goToHome();
                    }}
                />
                <SearchForm/>
            </>
            {user ? (
                <div className={visible}>
                    <NavLogged />
                </div>
            ) : (
                <div className={visible}>
                    <NavUnlogged />
                </div>
            )}
            <div className="hamburger" onClick={() => menuVisibility()}>
                {" "}
                <FaBars size={35} />{" "}
            </div>
        </StyledHeader>
    );
};
