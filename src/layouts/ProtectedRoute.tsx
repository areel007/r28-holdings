import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type ProtectedRouteProps = {
    isAuthenticated: string | null;
    redirect: string;
}

export const ProtectedRoute = ({ isAuthenticated, redirect }: ProtectedRouteProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(redirect);
        }
    }, [isAuthenticated, navigate, redirect]);

    if (!isAuthenticated) {
        return null;
    }

    return <Outlet />;
};
