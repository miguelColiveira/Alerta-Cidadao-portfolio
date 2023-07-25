import { Outlet } from "react-router-dom";
import { StyledUnloggedRoutes } from "./style";

export const UnloggedRoutes = () => {
    return (
        <StyledUnloggedRoutes>
            <Outlet />
        </StyledUnloggedRoutes>
    );
};
