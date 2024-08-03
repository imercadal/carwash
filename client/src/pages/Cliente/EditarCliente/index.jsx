/* EN PROCESO: Falta definir como va a encontrar al cliente en especifico, 
y me di cuenta que hacia falta un listado de clientes donde el funcionario 
escriba el nombre o email del cliente, haga click para ir a sus datos, y ah'i mismo pueda
actualizarlos de ser necesario (o eliminarlo). Asi que me voy a trabajar en ListadoClientes*/

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useClientes } from "../../Context/ClienteContext";
import { 
    Box,
    Button,
    Paper,
    FormLabel,
    Input
} from "@mui/material";
import Navbar from '../../components/Navbar';

const EditarCliente = () => {
    const { setValue, handleSubmit } = useForm();
    const { updateCliente } = useClientes();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        try{
            updateCliente(data);
            alert("Información del(a) cliente actualizada exitosamente.");
            navigate('/');
        } catch (error) {
            alert("Error al actualizar información", error)
            console.log(error)
        }
    }

    return(
<>
        <Navbar/>
        <Paper variant="elevation" elevation={3} sx={{
            backgroundColor: "primary.main",
            padding: "30px",
            width: "100%", 
            margin: "auto" }}>
            <Box 
            sx={{ 
                maxWidth: "500px",
                margin: "auto",
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                padding: '20px',
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                <Box 
                sx={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "center"}}
                fullWidth
                >
                    <FormLabel>Nombre completo:</FormLabel>
                    <Input
                    type="text"
                    placeholder="Nombre completo"
                    {...setValue("nombreCliente")}
                    autoFocus
                    fullWidth
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <FormLabel>Correo electrónico:</FormLabel>
                    <Input
                    type="text"
                    placeholder="Correo electrónico"
                    {...setValue("emailCliente")}
                    autoFocus
                    fullWidth
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <FormLabel>Móvil:</FormLabel>
                    <Input
                    type="number"
                    placeholder="Teléfono celular"
                    {...setValue("celularCliente")}
                    autoFocus
                    fullWidth
                    />
                    
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px"
                    }}
                >
                    <FormLabel>Patente vehículo 1:</FormLabel>
                    <Input
                        type="text"
                        placeholder="Patente del primer vehículo"
                        {...setValue("vehiculosCliente.patenteUno")}
                        autoFocus
                        fullWidth
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px"
                    }}
                >
                    <FormLabel>Patente vehículo 2:</FormLabel>
                    <Input
                        type="text"
                        placeholder="Patente del segundo vehículo"
                        {...setValue("vehiculosCliente.patenteDos")}
                        fullWidth
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px"
                    }}
                >
                    <FormLabel>Patente vehículo 3:</FormLabel>
                    <Input
                        type="text"
                        placeholder="Patente del tercer vehículo"
                        {...setValue("vehiculosCliente.patenteTres")}
                        fullWidth
                    />
                </Box>
                <Box 
                    sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"}}
                >
                    <Button
                        type="submit"
                        variant="contained"
                    >Actualizar cliente</Button>
                </Box>
            </form>
        </Box>
        </Paper>
        <Paper/>
        </>
    )
};

export default EditarCliente;