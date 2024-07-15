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
import Layout from "../../layout";


const RegistrarCliente = () => {
    const { register, handleSubmit } = useForm();
    const { createCliente } = useClientes();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        try {
            createCliente(data);
            alert("Cliente registrado exitosamente!");
            navigate("/");
        } catch (error) {
            console.log(error)
        }
        
    });

    return (
        <Layout>
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
                    {...register("nombreCliente")}
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
                    {...register("emailCliente")}
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
                    {...register("celularCliente")}
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
                        {...register("vehiculosCliente.patenteUno")}
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
                        {...register("vehiculosCliente.patenteDos")}
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
                        {...register("vehiculosCliente.patenteTres")}
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
                    >Registrar cliente</Button>
                </Box>
            </form>
        </Box>
        </Paper>
        <Paper/>
        </Layout>
    );
};

export default RegistrarCliente;


