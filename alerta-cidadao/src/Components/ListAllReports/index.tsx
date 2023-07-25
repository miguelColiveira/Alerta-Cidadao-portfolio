import { useContext } from "react";
import { ReportContext } from "../../Context/reportsContext";
import { ReportCard } from "../ReportCard";
import { SearchForm } from "../SearchForm";
import { StyledListAllReports } from "./style";

export const ListAllReports = () => {
    const { filteredReports } = useContext(ReportContext);
    return (
        <StyledListAllReports>
            <SearchForm/>
           {filteredReports.length != 0 ?
                filteredReports.map((report) => (
                    <ReportCard key={report.id} report={report} />
                ))
            :
            <h1>  Nenhum report </h1>
            }
           
        </StyledListAllReports>
    );
};
