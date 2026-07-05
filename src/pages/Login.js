import React from "react";

import "./../styles/Login.css";
import {
    Paper,
    Typography,
    TextField,
    Button,
    Box
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import MainLayout from "../layouts/MainLayout";
import AuthService from "../services/AuthService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // const onSubmit = (data) => {
    //     console.log(data);
    //     alert("Login Success");
    // };

    const onSubmit = (data) => {

    AuthService.login(data)
        .then((response) => {

            console.log(response.data);

            localStorage.setItem(
                "token",
                response.data.token
            );

            toast.success("Login Successful");

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);

        })
        .catch((error) => {

            console.log(error);

            toast.error("Invalid Email or Password");

        });
    };

    const navigate = useNavigate();

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