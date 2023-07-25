import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IReport } from "../../Context/@types";
import { ReportContext } from "../../Context/reportsContext";
import { UserContext } from "../../Context/userContext";
import { Input } from "../Input";
import { IMunicipio, IUf } from "../RegisterForm";
import { StyledSelect } from "../RegisterForm/style";
import { schemaNewReportFormLogged } from "./schema";
import { StyledReportFormLogged } from "./style";

export const NewReportFormLogged = () => {
    const [selectedUF, setSelectedUf] = useState<string | unknown>("0");
    const [selectedCity, setSelectedCity] = useState<string | unknown>("0");
    const [ufs, setUfs] = useState<IUf[]>([]);
    const [municipios, setMunicipios] = useState<IMunicipio[]>([]);

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

    const { user } = useContext(UserContext);
    const { handleSubmitNewReport } = useContext(ReportContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IReport>({
        resolver: yupResolver(schemaNewReportFormLogged),
        defaultValues: {
            userId: user?.id,
            name: user?.name,
            email: user?.email,
        },
    });

    const submitNewReport: SubmitHandler<IReport> = (formData) => {
        handleSubmitNewReport(formData);
        reset();
    };

    return (
        <StyledReportFormLogged onSubmit={handleSubmit(submitNewReport)}>
            <h1> Faça aqui seu relato: </h1>

            <Input
                label="Titulo"
                type="text"
                placeholder="Digite seu email"
                register={register("title")}
                error={errors.title}
            />
            <Input
                label="Imagem"
                type="text"
                placeholder="Url da imagem"
                register={register("img")}
            />

            <div className="select-location">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Estado
                    </InputLabel>
                    <StyledSelect
                        labelId="demo-simple-select-label"
                        id="uf"
                        {...register("state")}
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
                        {...register("city")}
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

            <p>{errors?.description?.message} </p>
            <Input
                multiline={true}
                rows={10}
                register={register("description")}
                placeholder="Descreva aqui seu problema"
                label="Descrição"
            />

            <Button type="submit" variant="contained">
                {" "}
                Enviar{" "}
            </Button>
        </StyledReportFormLogged>
    );
};
