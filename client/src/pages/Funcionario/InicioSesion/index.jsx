import * as React from 'react';
import Layout from "../../../layout";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../Context/AuthContext";
import { useEffect } from "react";

function InicioSesion() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signin, errors: SigninErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) {
        navigate("/");
        }

    }, [isAuthenticated])

    return (
        <Layout>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Inicio de sesión
            </Typography>
            {Array.isArray(SigninErrors) && SigninErrors.map((error, index) => (
            <div key={index} >{error}
            </div>
            ))}
            <Box component="form" onSubmit={ onSubmit } noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                {...register("emailFuncionario", { required: true })}
                fullWidth
                id="emailFuncionario"
                label="Email Address"
                name="emailFuncionario"
                autoComplete="emailFuncionario"
                autoFocus
                />
                {errors.emailFuncionario && (
                <span className=" text-red-500">El email es requerido</span>
                )}
                <TextField
                margin="normal"
                {...register("password", { required: true })}
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                {errors.password && (
                <span className=" text-red-500">La contraseña es requerida</span>
                )}
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Iniciar sesión
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/funcionarios/registro" variant="body2">
                    {"¿No tienes una cuenta? Regístrate"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </Layout>
    );
    }

export default InicioSesion;
