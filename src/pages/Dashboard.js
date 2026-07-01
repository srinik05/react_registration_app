import { Button, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import MainLayout from "../layouts/MainLayout";

function Dashboard() {
    return (
        <MainLayout>
            <div
                style={{
                    padding: "30px"
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Welcome Admin
                </Typography>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Total Users
                                </Typography>
                                <Typography variant="h3">
                                    125
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">
                                    Active Users
                                </Typography>
                                <Typography variant="h3">
                                    98
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    fullWidth
                                >
                                    Add User
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    fullWidth
                                >
                                    View Users
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </MainLayout>
    );
}

export default Dashboard;