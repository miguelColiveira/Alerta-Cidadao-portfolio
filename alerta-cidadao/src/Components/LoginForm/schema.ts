import * as yup from "yup";

export const schemaLoginForm = yup
  .object({
    email: yup
      .string()
      .required("Preencha o campo")
      .email("Preencha com um e-mail valido"),
    password: yup.string().required("Preencha o campo"),
  })
  .required();
