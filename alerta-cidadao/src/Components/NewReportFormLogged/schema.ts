import * as yup from "yup";

export const schemaNewReportFormLogged = yup
  .object({
    description: yup.string().required("Descrição obrigatória"),
    title: yup.string().required("Descreva em poucas palavras")
  })
  .required();
