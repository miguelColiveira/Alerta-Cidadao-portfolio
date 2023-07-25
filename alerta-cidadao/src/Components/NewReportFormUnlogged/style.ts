import styled from "styled-components";

export const StyledReportForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 1.5rem 1rem;
    background-color: var(--color-grey-700);
    border-radius: var(--border-radius-default);
    font-family: var(--font-family);

    p{
        color: var(--color-secondary);
    }
    h1, h2{
        color: var(--color-grey-100);
    }
    .select-location{
        display: flex;
        gap: 0.5rem;
    }
`;
