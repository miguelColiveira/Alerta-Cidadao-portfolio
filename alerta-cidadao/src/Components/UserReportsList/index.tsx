import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IReport } from "../../Context/@types";
import { baseURL } from "../../Services/fakeApi";
import { ReportCard } from "../ReportCard";
import { StyledUserReportsList } from "./style";

export const UserReportList = () => {
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
            {userReports.map((report) => (
                <ReportCard key={report.id} report={report} />
            ))}
        </StyledUserReportsList>
    );
};
