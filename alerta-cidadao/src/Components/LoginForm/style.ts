import styled from "styled-components";

export const StyledLoginForm = styled.form`
    font-family: var(--font-family);
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 1.5rem 1rem;
    background-color: var(--color-grey-700);
    border-radius: var(--border-radius-default);
    
    p {
        color: var(--color-secondary);
    }
    h1{
        color: var(--color-grey-100);
    }
`;
