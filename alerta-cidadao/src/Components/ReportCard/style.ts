import styled from "styled-components";

export const StyledReportCard = styled.li`
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    padding: 10px;

    background-color: var(--color-grey-900);
    color: var(--color-grey-100);
    transition: 600ms;
    border-radius: var(--border-radius-default);
    border: 1px solid transparent;
    
    cursor: pointer;

    h1::first-letter{
        text-transform: uppercase;
    }
    .report-description{
        display: inline;
    }
    .report-description::first-letter{
        text-transform: uppercase;
    }

    img{
       width: 50%;
        margin: 0 auto;
    }

    &&:hover {
        border: 1px solid var(--color-grey-0);
    }

    .trashButton{
        cursor: pointer;
    }

    .userImage {
        width: 90%;
    }
`;
