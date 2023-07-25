import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary-darker:#591515;
        --color-primary:#8C251C;
        --color-secondary:#F25050;
        --color-primary-lighter:#F2958C;
        
        --color-grey-900:#121214; 
        --color-grey-700:#212529;
        --color-grey-700-opacity: rgba(33, 37, 41, 0.9);
        --color-grey-500:#343B41;
        --color-grey-300:#868E96;
        --color-grey-100:#F8F9FA;

        --color-grey-0:#FFFFFF;

        --border-radius-default:5px;
        --color-negative:#E83F5B;
        --color-warning:#FFCD07;
        --color-success:#3FE864;
        --color-information:#155BCB;
        --radius-default: 0.5rem;
        
        --font-family: "Roboto", sans-serif;
    
        --font-size-big:1.125rem;
        --font-size-medium:1rem;
        --font-size-regular:  0.875rem;
        --font-size-small:  0.75rem;
        --font-weight-light:200;
        --font-weight-regular:300;
        --font-weight-medium:600;
        --font-weight-bold:800;
    }

    .MuiList-root{
    background-color: var(--color-primary-darker) !important;
}
.MuiButtonBase-root{
    background-color: var(--color-primary-darker) !important;
}
    `;
