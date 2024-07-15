import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import NotFound from "./components/NotFound/NotFound";
import Api from "./pages/Api";
import InicioSesion from "./pages/Funcionario/InicioSesion";
import RegistroOrdenes from "./pages/Ordenes/RegistroOrden";
import CheckOut from "./pages/Ordenes/CheckOut/Checkout";
import RegistroFuncionario from "./pages/Funcionario/RegistroFuncionario";
import RegistrarCliente from "./pages/Cliente/RegistroCliente";
//import CheckOut from "./pages/Ordenes/CheckOut/Checkout";

import { AuthProvider } from "./Context/AuthContext";
import { ClienteProvider } from "./Context/ClienteContext";

function App() {
  return (
    <ClienteProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/api" element={<Api />} />
          <Route path="/funcionarios/login" element={<InicioSesion/>}></Route>
          <Route path="/funcionarios/registro" element={<RegistroFuncionario/>}></Route>
          <Route path="/registroOrdenes" element={<RegistroOrdenes/>}></Route>
          <Route path="/checkout" element={<CheckOut/>}></Route>
          <Route path="/registroCliente" element={<RegistrarCliente/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </ClienteProvider>
  );
}

export default App;

// <Route path="/pets/:id/edit" element={<EditPage></EditPage>}></Route>
