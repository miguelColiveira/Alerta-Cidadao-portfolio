import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { StyledModalDelete } from "./style";

export function ModalDelete() {
    const { deleteUser, setModalDelete } = useContext(UserContext);

    function deleteOnClick() {
        deleteUser();
    }

    return (
        <StyledModalDelete>
            Voce tem certeza que deseja deletar sua conta?
            <div className="container__btns-delete">
                <button onClick={() => deleteOnClick()}>Deletar conta</button>
                <button onClick={() => setModalDelete(false)}>Cancelar</button>
            </div>
        </StyledModalDelete>
    );
}
