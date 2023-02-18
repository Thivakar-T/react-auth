import React from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const CommonAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.role==="User" ||  auth?.role==="Admin"
        ? <Outlet />
        : auth?.user
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
);
}

export default CommonAuth;
