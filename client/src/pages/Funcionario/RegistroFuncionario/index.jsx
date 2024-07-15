import Layout from "../../../layout";
import * as React from 'react';
import { 
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Typography,
    Container 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useForm } from "react-hook-form";

import { useAuth } from "../../../Context/AuthContext"; 
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";

function RegistroFuncionario() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); 
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/");
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(async (values) => {
        await signup(values);
    });

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
                    Registro de funcionarios(as)
                </Typography>
                {Array.isArray(RegisterErrors) && RegisterErrors.map((error, index) => (
                <div key={index} >{error}
                </div>
                ))}
                <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                        autoComplete="nombreFuncionario"
                        name="nombreFuncionario"
                    {...register("nombreFuncionario", { required: true })}
                    fullWidth
                    id="nombreFuncionario"
                    label="Nombre"
                    autoFocus
                    />
                    {errors.nombreFuncionario && (
                    <span>El nombre es obligatorio</span>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    autoComplete="apellidoFuncionario"
                    name="apellidoFuncionario"
                    {...register("apellidoFuncionario", { required: true })}
                    fullWidth
                    id="apellidoFuncionario"
                    label="Apellido"
                    autoFocus
                    />
                    {errors.apellidoFuncionario && (
                    <span>El apellido es obligatorio</span>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    {...register("emailFuncionario", { required: true })}
                    fullWidth
                    id="emailFuncionario"
                    label="Correo electrónico"
                    name="emailFuncionario"
                    autoComplete="emailFuncionario"
                    />
                    {errors.emailFuncionario && (
                    <span>El correo electrónico es obligatorio</span>
                    )}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    {...register("password", { required: true })}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    />
                    {errors.password && (
                    <span>La contraseña es obligatoria</span>
                    )}
                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Registrarse
                </Button>
                <Grid container justifyContent="flex-end">
                <Grid item>
                    <NavLink to="/funcionarios/login" variant="body2">
                    ¿Ya tienes una cuenta? Inicia sesión
                    </NavLink>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Container>
        </Layout>
    );
}

export default RegistroFuncionario;