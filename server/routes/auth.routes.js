import { Router } from "express"; 
import {
    login,
    logout,
    profile,
    register,
    verifyToken,
    getAllFuncionarios,
    updateFuncionario,
    deleteFuncionario
} from "../controllers/auth.controller.js"; // Importando los controladores de autenticación

import { authRequired } from "../middlewares/validateToken.js"; // Importando el middleware para verificar el token

import { validateSchema } from "../middlewares/validator.middleware.js"; // Importando el middleware para validar el esquema

import { registerSchema, loginSchema } from "../validators/auth.validator.js"; // Importando los esquemas de validación para autenticación


const router = Router(); // Creando una instancia de Router

router.post( 

    "/register",
    validateSchema(registerSchema), 
    register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.get("/verify", verifyToken);

router.get("/funcionarios/todos", getAllFuncionarios);

router.put("/funcionarios/:id", updateFuncionario);

router.delete("/funcionarios/:id", deleteFuncionario);

export { router }; 