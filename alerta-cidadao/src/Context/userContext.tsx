import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../Services/fakeApi";
import {
    IChildrenProps,
    ILoginFormData,
    IRegisterFormData,
    IUser,
} from "./@types";

interface IUserContext {
    user: IUser | null;
    handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
    handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
    handleLogout: () => void;
    deleteUser: () => Promise<void>;
    modalDelete: boolean;
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
    handleUpdateUser:(formData:any) => Promise<void>;
    modalUpdate: boolean;
    setModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
    const [user, setUser] = useState(null as IUser | null);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalUpdate, setModalUpdate] = useState(false);

    const navigate = useNavigate();

    const autoLogin = async (userId: string | null, token: string) => {
        try {
            const response = await baseURL.get(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
            navigate("/");
        } catch (error) {
            localStorage.removeItem("@USERTOKEN");
            localStorage.removeItem("@USERID");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("@USERTOKEN");
        const userId = localStorage.getItem("@USERID");
        if (token) {
            autoLogin(userId, token);
        }
    }, []);

    const handleSubmitLogin = async (formData: ILoginFormData) => {
        const toastLogin = toast.loading("Efetuando login");
        try {
            const response = await baseURL.post("/login", formData);
            localStorage.setItem("@USERTOKEN", response.data.accessToken);
            localStorage.setItem("@USERID", response.data.user.id);
            setUser(response.data.user);
            toast.update(toastLogin, {
                render: `Bem vindo ${response.data.user.name}`,
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            navigate(`/`);
        } catch (error) {
            toast.update(toastLogin, {
                render: `Erro ao efetuar o login reveja suas informações`,
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const handleSubmitRegister = async (formData: IRegisterFormData) => {
        const toastRegister = toast.loading("Efetuando cadastro");
        try {
            const response = await baseURL.post("/register", formData);
            toast.update(toastRegister, {
                render: "Cadastro realizado com sucesso",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            navigate(`/login`);
        } catch (error) {
            toast.update(toastRegister, {
                render: "Erro ao efetuar o cadastro reveja suas informações",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("@USERTOKEN");
        localStorage.removeItem("@USERID");
        setUser(null);
        navigate("/");
    };

    const deleteUser = async () => {
        const userId = localStorage.getItem("@USERID");
        const token = localStorage.getItem("@USERTOKEN");
        const toastDelete = toast.loading("Deletando sua conta");
        try {
            const response = await baseURL.delete(`/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(null);
            toast.update(toastDelete, {
                render: "Conta deletada",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            navigate("/");
        } catch (error) {
            console.error(error);
            toast.update(toastDelete, {
                render: "Erro ao deletar a conta tente novamente",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const handleUpdateUser = async (formData:any) => {
        const userId = localStorage.getItem("@USERID");
        const token = localStorage.getItem("@USERTOKEN");

        const toastPerfilMod = toast.loading("Atualizando suas informações");
        try {
            const response = await baseURL.patch(`/users/${userId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data);
            
            toast.update(toastPerfilMod, {
                render: "Informações atualizadas",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        } catch (error) {
            console.error(error);
            toast.update(toastPerfilMod, {
                render: "Erro ao tentar atualizar as informações tente novamente",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    return (
        <UserContext.Provider
            value={{
                user,
                handleSubmitLogin,
                handleSubmitRegister,
                handleLogout,
                deleteUser,
                modalDelete,
                setModalDelete,
                handleUpdateUser,
                modalUpdate,
                setModalUpdate,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
