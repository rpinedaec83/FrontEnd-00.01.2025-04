import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({children}){
    const { isAuthenticate} = useAuth();
    return isAuthenticate ? children: <Navigate to='/login'/>
}