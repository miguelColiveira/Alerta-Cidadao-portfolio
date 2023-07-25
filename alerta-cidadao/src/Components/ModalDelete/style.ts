import styled from "styled-components";

export const StyledModalDelete = styled.div`
    background-color: var(--color-grey-900);
    padding: 1rem;

    height: 9rem;
    width: 320px;
    max-width: 100%;

    padding: 1rem;
    margin-left:-15px;

    position: absolute;
    bottom: -9.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 5px;
    
    .container__btns-delete{
        display: flex;

    }
`;
