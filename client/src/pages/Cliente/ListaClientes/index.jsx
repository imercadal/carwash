import Navbar from "../../../components/Navbar";
import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { useClientes } from "../../../Context/ClienteContext";

import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Button,
    Paper,
    Typography,
} from "@mui/material";


const ListaClientes = () => {
    const navigate = useNavigate();
    const { clientes, getAllClientes } = useClientes();

    useEffect(() =>{
        getAllClientes();
    }, [])

    return(
        <>
            <Navbar/>
            <TableContainer component={Paper} sx={{ padding: "2em"}}>
                <Typography variant="h1">Lista de clientes</Typography>
                <Table sx={{ minWidth: 650 }} aria-label="Lista de clientes">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Celular</TableCell>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">Vehiculo 1</TableCell>
                            <TableCell align="center">Vehiculo 2</TableCell>
                            <TableCell align="center">Vehiculo 3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {clientes.map(cliente => (
                        <TableRow 
                            key={cliente.emailCliente}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{cliente.nombreCliente}</TableCell>
                            <TableCell align="center">{cliente.emailCliente}</TableCell>
                            <TableCell align="center">{cliente.celularCliente}</TableCell>
                            <TableCell align="center">{cliente._id}</TableCell>
                            <TableCell align="center">{cliente.vehiculosCliente.patenteUno}</TableCell>
                            <TableCell align="center">{cliente.vehiculosCliente.patenteDos}</TableCell>
                            <TableCell align="center">{cliente.vehiculosCliente.patenteTres}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2em' }}>
                    <Button 
                        onClick={() => navigate('/')}
                        variant="contained"
                        sx={{ padding: 2 }}
                    >Ir al inicio</Button>
                    <Button 
                        onClick={() => navigate('/registroCliente')}
                        variant="contained"
                        sx={{ padding: 2 }}
                    >Registrar cliente</Button>
                </div>
            </TableContainer>

        </>
    );
};

export default ListaClientes;