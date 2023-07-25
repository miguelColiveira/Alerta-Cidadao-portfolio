import * as yup from "yup";

export const schemaComment = yup
  .object({
    body: yup
      .string()
      .required("Comentário vazio"),
  })
  .required();
