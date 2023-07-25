import { Select } from "@mui/material";
import styled from "styled-components";

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 30rem;
    max-width: 100%;

    padding: 1.5rem 1rem;
    background-color: var(--color-grey-700);
    border-radius: var(--border-radius-default);
    font-family: var(--font-family);
    .select-location {
        display: flex;
        gap: 20px;
    }

    p{
        color: var(--color-secondary);
    }
    h1{
        color: var(--color-grey-100);
    }
`;

export const StyledSelect = styled(Select)`

background-color: var(--color-grey-500);
color: black;
.MuiOutlinedInput-notchedOutline{
    border-color:var(--color-grey-0) ;
}

`
