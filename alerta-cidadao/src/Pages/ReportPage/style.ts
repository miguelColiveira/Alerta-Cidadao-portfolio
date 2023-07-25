import styled from "styled-components";

export const StyledReportPage = styled.div`
    background-color: var(--color-grey-700);

    margin: 12vh auto;

    width: 60rem;
    max-width: 98vw;

    padding: 1rem;
    color: var(--color-grey-100);

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

export const CommentUl = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid rgb(120 4 4);
    padding: 20px;
    border-radius: 4px;
    list-style: none;

    gap: 15px;
    
    width: 58rem;
    max-width: 92vw;
`;
