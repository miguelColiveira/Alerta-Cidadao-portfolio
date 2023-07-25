import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IReport } from "../../Context/@types";
import { baseURL } from "../../Services/fakeApi";
import { ReportCardProfile } from "../ReportCardProfile";
import { StyledUserReportsList } from "./style";

export const UserReportListProfile = () => {
    const [userReports, setUserReports] = useState([] as IReport[]);

    useEffect(() => {
        const token = localStorage.getItem("@USERTOKEN");
        const userId = localStorage.getItem("@USERID");

        const getUserReports = async () => {
            try {
                const response = await baseURL.get(`/users/${userId}/reports`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserReports(response.data);
            } catch (error) {
                toast.error("Falha ao buscar os reports");
            }
        };
        getUserReports();
    }, []);

    return (
        <StyledUserReportsList>
        {userReports.length>0 ?
        (userReports.map((report) => (
            <ReportCardProfile key={report.id} report={report} />
        )))    
        :
        <div className="container-no-reports">
            <h1> Você ainda não tem relatos!</h1>
            <Link to="/new-report"> Faça agora! </Link>
        </div>
        }
        </StyledUserReportsList>
    );
};
