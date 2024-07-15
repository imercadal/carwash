import express from "express";
import * as clienteCtrl from "../controllers/cliente.controller.js";

const clienteRouter = express.Router();

clienteRouter.post("/api/clientes", clienteCtrl.createCliente);
clienteRouter.get("/api/clientes", clienteCtrl.getAllClientes);
clienteRouter.get("/api/clientes/:id", clienteCtrl.getClienteById);
clienteRouter.put("/api/clientes/:id", clienteCtrl.updateCliente);
clienteRouter.delete("/api/clientes/:id", clienteCtrl.deleteCliente);

export { clienteRouter };