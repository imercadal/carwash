import express from "express"; 
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import carwashConnect from './db.js';

import * as ordenRoutes from "./routes/orden.routes.js"; 
import * as clienteRoutes from "./routes/cliente.routes.js";
import * as servicioRoutes from "./routes/servicio.routes.js";
import * as authRoutes from "./routes/auth.routes.js";


const app = express(); 
const port = 8000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({ 
    origin: 'http://localhost:3000',
    credentials: true
}));

carwashConnect();

app.use(ordenRoutes.ordenRouter);
app.use(clienteRoutes.clienteRouter);
app.use(servicioRoutes.servicioRouter);
app.use("/api", authRoutes.router);


app.listen(port, () => {
    console.log(`El servidor está activo en el puerto ${port}`);
});