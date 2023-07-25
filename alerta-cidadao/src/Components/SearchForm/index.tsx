import { useContext } from "react";
import { Input } from "../../Components/Input";
import { FaSearch } from "react-icons/fa";
import { ReportContext } from "../../Context/reportsContext";
import { StyledSearchForm } from "./style";

export const SearchForm = () => {
    const { setFilterReports } = useContext(ReportContext);

    const handleFilterSubmit = (event: any) => {
        event.preventDefault();
    };

    return (
        <StyledSearchForm
            action=""
            onSubmit={(event) =>
                handleFilterSubmit(event)
            }
        >
            <Input
                label="Barra de pesquisa"
                type="text"
                placeholder="Cidade, estado ou titulo"
                onChange={(event: any) =>
                     setFilterReports(event.currentTarget.value)
                }
            />
            <button type="submit">
                <FaSearch color="#FFF" size={30} />
            </button>
        </StyledSearchForm>
    );
};
