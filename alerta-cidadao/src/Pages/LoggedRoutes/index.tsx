import { Outlet } from "react-router-dom";
import { StyledLoggedRoutes } from "./style";

export const LoggedRoutes = () => {
    return (
        <StyledLoggedRoutes>
            <Outlet />
        </StyledLoggedRoutes>
    );
};
