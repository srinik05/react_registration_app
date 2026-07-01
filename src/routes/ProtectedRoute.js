import { Navigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function ProtectedRoute({ children }) {
const isLoggedIn = AuthService.isLoggedIn();

    return isLoggedIn ? children : <Navigate to="/login" />;   
}

export default ProtectedRoute; 