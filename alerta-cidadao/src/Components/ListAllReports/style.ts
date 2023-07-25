import styled from "styled-components";

export const StyledListAllReports = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background-color: var(--color-grey-700-opacity);
    width: 800px;
    max-width: 98%;
    padding: 1rem;

    h1{
        font-family: var(--font-family);
        color: var(--color-grey-100);
        font-weight: var(--font-weight-regular);
    }
    @media (min-width:1028px) {
        form{
            display: none;
        }
    }
`;
