import styled from "styled-components";

export const StyledReportCard = styled.li`
    display: flex;
    gap: 25px;
    flex-direction: column;

    width: 100%;
    padding: 10px;

    background-color: var(--color-grey-900);
    color: var(--color-grey-100);
    transition: 600ms;
    border-radius: var(--border-radius-default);
    border: 1px solid transparent;
    
    position: relative;
    
    h1::first-letter{
        text-transform: uppercase;
    }
    .report-description{
        display: inline;
    }
    .report-description::first-letter{
        text-transform: uppercase;
    }
    .btn-delete-report{
        height: fit-content;
        background-color: transparent;
        border: none;
        position: absolute;
        right: 0;
    }
    .userImage {
        width: 90%;
    }
`;
