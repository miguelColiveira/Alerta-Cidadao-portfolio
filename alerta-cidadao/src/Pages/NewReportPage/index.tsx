import { useContext } from "react";
import { NewReportFormLogged } from "../../Components/NewReportFormLogged";
import { NewReportForm } from "../../Components/NewReportFormUnlogged";
import { UserContext } from "../../Context/userContext";
import { StyledReportPage } from "./style";

export const NewReportPage = () => {
    const { user } = useContext(UserContext);
    return (
        <StyledReportPage>
            {user ? (
                <div>
                    <NewReportFormLogged />
                </div>
            ) : (
                <div>
                    <NewReportForm />
                </div>
            )}
        </StyledReportPage>
    );
};
