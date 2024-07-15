import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BottomNavBar from "../../components/BottomNav"
import {
  Button,
  Container,
  Box
} from '@mui/material';
import washImg from '../../assets/img/wash.jpg';
import vacuumImg from '../../assets/img/vacuum.jpg';
import waxImg from '../../assets/img/wax.jpg';



export const HomePage = () => {
  const navigate = useNavigate();

  const goToDetails = (servicioId) => {
    navigate(`/servicio/${servicioId}`);
  };

  const irAlCarrito = () => {
    navigate("/checkout");
  };

  const irAlRegistroCliente = () => {
    navigate("/registroCliente");
  };

  const irAlRegistroOrdenes = () => {
    navigate("/registroOrdenes");
  };

  return (
    <Container sx={{ height: "100vh"}}>
      <Navbar
        onClick2={irAlCarrito}
        linkName2={"Carro de compras"}
        onClick3={irAlRegistroCliente}
        linkName3={"Registro de Clientes"}
        onClick4={irAlRegistroOrdenes}
        linkName4={"Registro de Ordenes"}
      />
      <Box sx={{
        backgroundColor: "primary.main",
        height: "85vh",
        display: "flex",
        paddingTop: "20px",
        paddingBottom: "20px"
        }}>

          <Box sx={{ flex: 1, padding: "20px", overflow: "hidden" }}>
            <img src={ washImg } alt="Wash" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
            <Button variant="contained" onClick={goToDetails} sx={{ position: "absolute", top: "82%", left: "23%", transform: "translate(-50%, -50%)" }}>
              + Lavado exterior $1000
            </Button>
          </Box>
          <Box sx={{ flex: 1, padding: "20px", borderRadius: "20px", overflow: "hidden" }}>
            <img src={ vacuumImg } alt="Wash" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
            <Button variant="contained" onClick={goToDetails} sx={{ position: "absolute", top: "82%", left: "50%", transform: "translate(-50%, -50%)" }}>
            + Lavado completo $2000
            </Button>
          </Box>
          <Box sx={{ flex: 1, padding: "20px", borderRadius: "20px", overflow: "hidden" }}>
            <img src={ waxImg } alt="Wash" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} />
            <Button variant="contained" onClick={goToDetails} sx={{ position: "absolute", top: "82%", left: "77%", transform: "translate(-50%, -50%)" }}>
              + Encerado $1200
            </Button>
          </Box>
      </Box>
      <BottomNavBar />
    </Container>
  );
};