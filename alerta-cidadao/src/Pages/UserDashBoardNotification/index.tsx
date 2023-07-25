import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ModalDelete } from "../../Components/ModalDelete";
import { UserContext } from "../../Context/userContext";
import { StyledUserDashBoard } from "./style";
import { FaRegSun } from "react-icons/fa";


export const UserDashBoardPageNotification = () => {
    const { modalDelete, setModalDelete } =
        useContext(UserContext);
    const [dashboardVisibility, setDashboardVisibility] = useState(
        "container__user-dashboard-hidden"
    );

    const {userId} = useParams()

    const toggleModalDashboardList = () => {
        dashboardVisibility == "container__user-dashboard-hidden"
            ? setDashboardVisibility("container__user-dashboard")
            : setDashboardVisibility("container__user-dashboard-hidden");
    };
    return (
        <StyledUserDashBoard>
            
            <div className="container-no-notifications">
                <h1> Não há novas notificações sobre seus relatos. </h1>
                <button> Receber via email </button>
            </div>

            <button
                className="btn-config"
                onClick={() => toggleModalDashboardList()}
            >
                <FaRegSun color="#FFF" size={30} />
            </button>

            <div className={dashboardVisibility}>
                <div className="content-dashboard">
                    <p
                        onClick={() => toggleModalDashboardList()}
                        className="close-modal"
                    >
                        {" "}
                        x
                    </p>
                    <h2> Configurações da conta: </h2>
                    <Link to={`/dashboard-att-user/${userId}`}> Atualizar informações </Link>
                    <Link to={`/dashboard-posts/${userId}`}> Meus posts </Link>
                    <Link to={`/dashboard-notificaton/${userId}`}> Notificações </Link>
                    <button onClick={() => setModalDelete(true)}>
                        {" "}
                        Deletar conta
                    </button>
                    <div className="container__delete">
                        {modalDelete ? <ModalDelete /> : null}
                    </div>
                </div>
            </div>
        </StyledUserDashBoard>
    );
};
