import { AppBar, Box, Toolbar, Typography } from "@mui/material";


function Footers() {
        return (
        <Box
            sx={{
                textAlign: "center",
                marginTop: "30px",
                padding: "15px"
            }}
        >
            <Typography variant="body2">
                © 2026 User Management Portal
            </Typography>
        </Box>
    );
}
export default Footers;