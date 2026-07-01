import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1 }}
                >
                    User Management Portal
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Header;