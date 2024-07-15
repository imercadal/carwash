import { Router } from "express"; 
import {
    login,
    logout,
    profile,
    register,
    verifyToken,
    getAllFuncionarios,
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

router.post("/login", validateSchema(loginSchema), login); // Ruta para iniciar sesión

router.post("/logout", logout); // Ruta para cerrar sesión

router.get("/profile", authRequired, profile); // Ruta para obtener el perfil del funcionario

router.get("/verify", verifyToken); // Ruta para verificar el token

router.get("/funcionarios/todos", getAllFuncionarios); // Ruta para obtener todos los funcionarios

router.delete("/funcionarios/:id", deleteFuncionario); // Ruta para eliminar un funcionario

export { router }; 