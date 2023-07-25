import { SubmitHandler, useForm } from "react-hook-form";
import { StyledLoginForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLoginForm } from "./schema";
import { Input } from "../Input";
import { ILoginFormData } from "../../Context/@types";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import Button from "@mui/material/Button";

export const LoginForm = () => {
    const { handleSubmitLogin } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginFormData>({ resolver: yupResolver(schemaLoginForm) });

    const submitLogin: SubmitHandler<ILoginFormData> = (formData) => {
        handleSubmitLogin(formData);
    };

    return (
        <StyledLoginForm onSubmit={handleSubmit(submitLogin)}>
            <h1> Login </h1>
            <Input
                label="Email"
                type="email"
                placeholder="Digite seu email"
                register={register("email")}
                error={errors.email}
            />
            <Input
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                register={register("password")}
                error={errors.password}
            />
            <Button type="submit" variant="contained">
                Logar
            </Button>
        </StyledLoginForm>
    );
};
