import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../Services/fakeApi";
import { IChildrenProps, IReport } from "./@types";

interface IReportContext {
    reports: IReport[];
    setReports: React.Dispatch<React.SetStateAction<IReport[]>>;
    filteredReports: IReport[];
    setFilterReports: React.Dispatch<React.SetStateAction<string>>;
    handleSubmitNewReport: (formData: IReport) => Promise<void>;
}

export const ReportContext = createContext({} as IReportContext);

export const ReportProvider = ({ children }: IChildrenProps) => {
    const [reports, setReports] = useState([] as IReport[]);
    const [filterReports, setFilterReports] = useState("");

    const navigate = useNavigate();

    const getReportsList = async () => {
        try {
            const response = await baseURL.get(`/reports`);
            setReports(response.data);
        } catch (error) {
            console.error("error");
        }
    };

    useEffect(() => {
        getReportsList();
    }, [reports]);

    const handleSubmitNewReport = async (formData: IReport) => {
        const token = localStorage.getItem("@USERTOKEN");

        const toastNewReport = toast.loading("Efetuando cadastro");
        try {
            const response = await baseURL.post("/reports", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.update(toastNewReport, {
                render: "Reclamação registrada!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
            setReports([...reports, response.data]);
            navigate("/");
        } catch (error) {
            toast.update(toastNewReport, {
                render: "Erro ao efetuar a reclamação confira as informações e tente novamente.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const filteredReports = reports.filter(
        (report) =>
            report.title
                ?.toLowerCase()
                .includes(filterReports?.toLowerCase().trim()) ||
            report.state
                ?.toLowerCase()
                .includes(filterReports?.toLowerCase().trim()) ||
            report.city
                ?.toLowerCase()
                .includes(filterReports?.toLowerCase().trim())
    );

    return (
        <ReportContext.Provider
            value={{
                reports,
                setReports,
                filteredReports,
                setFilterReports,
                handleSubmitNewReport,
            }}
        >
            {children}
        </ReportContext.Provider>
    );
};
