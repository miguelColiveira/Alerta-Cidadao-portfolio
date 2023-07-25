import styled from "styled-components";

export const StyledUserReportsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 50rem;
    max-width: 96%;

    margin: 1rem auto;

    .container-no-reports {
        background-color: var(--color-grey-700);

        font-family: var(--font-family);
        color: var(--color-grey-100);
        padding: 1rem;
        width: 100%;
        margin: 20px;

        display: flex;
        flex-direction:column;
        align-items: center;
        gap: 16px;
        a {
            color: var(--color-grey-100);
            text-decoration: none;
            background-color: var(--color-primary);
            font-size: var(--font-size-regular);
            padding: 0.3rem 1.5rem;
            border-radius: 5px;

            width: fit-content;
           
        }
        a:hover {
            background-color: var(--color-secondary);
            box-shadow: 0px 0px 10px var(--color-secondary);
        }
    }
`;
