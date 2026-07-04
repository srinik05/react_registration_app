import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";



function Header() {
    const navigate = useNavigate();
    const loggedInUser = AuthService.getUser();
    const logout = () => {
        AuthService.logout();
        navigate("/login");
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    User Management Portal
                </Typography>
                <Button
                    color="inherit"
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </Button>

                <Button
                    color="inherit"
                    onClick={() => navigate("/users")}
                >
                    Users
                </Button>
                {
                    loggedInUser && (
                        <>
                            <Typography
                                sx={{ marginRight: 2 }}
                            >
                                Welcome {loggedInUser}
                            </Typography>
                            <Button
                                color="inherit"
                                onClick={logout}
                            >
                                Logout
                            </Button>
                        </>
                    )
                }
            </Toolbar>
        </AppBar>
    );
}
export default Header;