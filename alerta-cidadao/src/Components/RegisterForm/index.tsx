import { SubmitHandler, useForm } from "react-hook-form";
import { StyledRegisterForm, StyledSelect } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegisterForm } from "./schema";
import { Input } from "../Input";
import { IRegisterFormData } from "../../Context/@types";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/userContext";
import axios from "axios";
import { Button, FormControl, InputLabel, MenuItem } from "@mui/material";

export interface IUf {
    id: number;
    nome: string;
    regiao: IRegiao;
    sigla: string;
}

export interface IRegiao {
    id: number;
    nome: string;
    sigla: string;
}

export interface IMunicipio {
    id: number;
    nome: string;
}

export const RegisterForm = () => {
    const { handleSubmitRegister } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterFormData>({
        resolver: yupResolver(schemaRegisterForm),
    });
    const [ufs, setUfs] = useState<IUf[]>([]);
    const [municipios, setMunicipios] = useState<IMunicipio[]>([]);
    const [selectedUF, setSelectedUf] = useState<string | unknown>("0");
    const [selectedCity, setSelectedCity] = useState<string | unknown>("0");

    useEffect(() => {
        axios
            .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
            .then((response) => setUfs(response.data));
    }, []);

    useEffect(() => {
        axios
            .get(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`
            )
            .then((response) => setMunicipios(response.data));
    }, [selectedUF]);

    const submitRegister: SubmitHandler<IRegisterFormData> = (formData) => {
        handleSubmitRegister(formData);
    };

    return (
        <StyledRegisterForm onSubmit={handleSubmit(submitRegister)}>
            <h1> Cadastrar </h1>
            <Input
                label="Nome"
                type="text"
                placeholder="Digite seu username"
                register={register("name")}
                error={errors.name}
            />
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
            <Input
                label="Confirmar senha"
                type="password"
                placeholder="Confirme sua senha"
                register={register("confirmPassword")}
                error={errors.confirmPassword}
            />

            <div className="select-location">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Estado
                    </InputLabel>
                    <StyledSelect
                        labelId="demo-simple-select-label"
                        id="uf"
                        {...register("estado")}
                        value={selectedUF}
                        label="Estado"
                        onChange={(event) => {
                            setSelectedUf(event.target.value);
                        }}
                    >
                        <MenuItem value="0">Selecione seu estado</MenuItem>
                        {ufs.map((uf) => (
                            <MenuItem key={uf.id} value={uf.sigla}>
                                {uf.nome}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        {" "}
                        Cidade{" "}
                    </InputLabel>
                    <StyledSelect
                        id="city"
                        label="Cidade"
                        {...register("cidade")}
                        value={selectedCity}
                        onChange={(event) => {
                            setSelectedCity(event.target.value);
                        }}
                    >
                        <MenuItem value="0" hidden>
                            Selecione sua cidade
                        </MenuItem>
                        {municipios.map((municipio) => (
                            <MenuItem key={municipio.id} value={municipio.nome}>
                                {municipio.nome}
                            </MenuItem>
                        ))}
                    </StyledSelect>
                </FormControl>
            </div>
            <Button type="submit" variant="contained">
                Cadastrar
            </Button>
        </StyledRegisterForm>
    );
};
