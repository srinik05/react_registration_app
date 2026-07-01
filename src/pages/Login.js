import React from "react";

import "./../styles/Login.css";
import {
    Paper,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header from "../components/Header";
import Footer from "../components/Footers";
import MainLayout from "../layouts/MainLayout";




function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Login Success");
    };

    return (
        <MainLayout>
        <div className="container">
            <Paper elevation={6} className="card">
                <Typography
                    variant="h4"
                    className="title"
                >
                    Login
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-group">
                        <TextField
                            fullWidth
                            label="Email"
                            {...register("email", {
                                required: "Email is required"
                            })}

                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                    </div>

                    <div className="form-group">
                        <TextField
                            fullWidth
                            type="password"
                            label="Password"
                            {...register("password", {
                                required: "Password is required"
                            })}

                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    </div>

                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        type="submit"
                    >
                        Login
                    </Button>
                </Box>

                <div className="footer">
                    Don't have an account?
                    <br />
                    <Button
                        component={Link}
                        to="/"
                    >
                        Register
                    </Button>
                </div>
            </Paper>
        </div>
        </MainLayout>
    );
}
export default Login;