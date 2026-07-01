import React from "react";
import "./../styles/Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserService from "../services/UserService";
import { toast, ToastContainer } from "react-toastify"; // Import the toast container for notifications
import "react-toastify/dist/ReactToastify.css"; // Import the toastify CSS

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainLayout from "../layouts/MainLayout"; //adding Main Layout component to wrap the Register page instead of Header and Footer components

function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const onSubmit = (data) => {

        console.log(data);
        //alert("Registration Successful!");
        UserService.registerUser(data)
            .then((response) => {
            console.log(response.data);
            toast.success("Registration Successful");
        })

        .catch((error) => {
            console.log(error);
            toast.error("Unable to register user");
        });

    };

    return (
        <MainLayout>
        <div className="container">
            <Paper elevation={6} className="card">
           <Typography
                variant="h4"
                className="title"
                >
                User Registration
                </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="form-group">

                    <TextField
                        fullWidth
                        label="First Name"

                        {...register("firstName", {
                            required: "First Name is required"
                        })}

                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                    />

                </div>

                <div className="form-group">

                    <TextField
                        fullWidth
                        label="Last Name"

                        {...register("lastName", {
                            required: "Last Name is required"
                        })}

                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                    />

                </div>

                <div className="form-group">

                    <TextField
                        fullWidth
                        label="Email"

                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value:
                                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid Email"
                            }
                        })}

                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />

                </div>

                <div className="form-group">

                    <TextField
                        fullWidth
                        label="Mobile Number"

                        {...register("mobile", {
                            required: "Mobile Number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Enter 10 digit mobile number"
                            }

                        })}

                        error={!!errors.mobile}
                        helperText={errors.mobile?.message}
                    />

                </div>

                <div className="form-group">

                    <TextField
                        type="password"
                        fullWidth
                        label="Password"

                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Password should be minimum 6 characters"
                            }
                        })}

                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                </div>

                <div className="form-group">

                    <TextField
                        type="password"
                        fullWidth
                        label="Confirm Password"

                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: value =>
                                value === watch("password") ||
                                "Passwords do not match"
                        })}

                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                    />

                </div>

                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    type="submit"
                >

                    Register
                </Button>
                <div className="footer">
                    Already have an account?

                    <br />

                    <Button 
                    variant="text"
                    component={Link}
                    to="/login"
                    >
                        Login
                    </Button>
                </div>
            </Box>
            <ToastContainer /> {/* Add the toast container to display notifications */}
            </Paper>
        </div>
        </MainLayout>
        //</> // react fragment to wrap multiple elements without adding extra nodes to the DOM
    );

}

export default Register;