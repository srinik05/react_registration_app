import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserDataService from "../services/UserDataService";
import {
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";

function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(
            UserDataService.getUsers()
        );
    }, []);

    return (
        <MainLayout>
            <div style={{ padding: "30px" }}>
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Users
                </Typography>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                users.map(user => (
                                    <TableRow key={user.id}>
                                        <TableCell>{user.id}</TableCell>
                                        <TableCell>{user.firstName}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{user.mobile}</TableCell>
                                        <TableCell>{user.status}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </MainLayout>
    );
}

export default Users;