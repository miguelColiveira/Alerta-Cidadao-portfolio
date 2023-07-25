import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInput, StyledTextField } from "./style";

interface IInputProps {
    label?: string;
    placeholder: string;
    type?: "text" | "email" | "password" | "number";
    register?: UseFormRegisterReturn<string> | undefined;
    error?: FieldError;
    multiline?: boolean;
    rows?: number;
    onChange?: (event: any) => void;
}

export function Input({
    type,
    label,
    placeholder,
    register,
    error,
    multiline,
    rows,
    onChange,
}: IInputProps) {
    return (
        <StyledInput>
            <StyledTextField
                type={type}
                id={register?.name}
                label={label}
                placeholder={placeholder}
                variant="outlined"
                {...register}
                multiline={multiline}
                rows={rows}
                color="primary"
                sx={{ borderColor: "background.default" }}
                onChange={onChange}
            />
            {error && <p className="helperText">{error.message}</p>}
        </StyledInput>
    );
}
