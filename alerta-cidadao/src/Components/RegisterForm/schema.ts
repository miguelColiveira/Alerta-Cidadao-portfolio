import * as yup from "yup";

export const schemaRegisterForm = yup
    .object({
        name: yup.string().required("Preencha o campo"),
        email: yup
            .string()
            .required("Email obrigatório!")
            .email("Email invalido!"),
        password: yup
            .string()
            //   .matches(/(\d)/, "Deve conter pelo menos 1 número!")
            //   .matches(/[a-z]/, "Deve conter pelo menos 1 letra minuscula!")
            //   .matches(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula!")
            //   .matches(/(\W|_)/, "Deve conter pelo menos 1 carácter especial!")
            //   .matches(/.{8,}/, "Deve conter pelo menos 8 caracteres!")
            .required("Digite a senha!"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Falha na confirmação da senha!")
            .required("Confirme a senha!"),
    })
    .required();
