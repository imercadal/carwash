import Funcionario from "../models/funcionario.model.js";

import bcrypt from "bcryptjs"; // Importando bcrypt para encriptar la contraseña
import { createAccessToken } from "../libs/jwt.js"; // Importando la función para crear el token
import jwt from "jsonwebtoken"; // Importando jwt para verificar el token
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {

    const { nombreFuncionario, apellidoFuncionario, emailFuncionario, password } = req.body;

    try {
        const funcionarioEncontrado = await Funcionario.findOne({ emailFuncionario });

        if (funcionarioEncontrado)
        return res.status(400).json(["Este correo ya existe"]);
        
        const passwordHash = await bcrypt.hash(password, 10); 

        const newFuncionario = new Funcionario({

        nombreFuncionario,
        apellidoFuncionario,
        emailFuncionario,
        password: passwordHash,
        });
        
        const funcionarioSaved = await newFuncionario.save(); // Guardar el funcionario en la base de datos
        console.log(funcionarioSaved);
        
        const token = await createAccessToken({ id: funcionarioSaved._id }); //Crear token


        res.cookie("token", token); // Guardar el token en las cookies


        res.json({
        //Para no mostrar el password
        //Parametros que se van a mostrar en el front
        _id: funcionarioSaved._id,
        nombreFuncionario: funcionarioSaved.nombreFuncionario,
        apellidoFuncionario: funcionarioSaved.apellidoFuncionario,
        emailFuncionario: funcionarioSaved.emailFuncionario,
        createdAt: funcionarioSaved.createdAt,
        updatedAt: funcionarioSaved.updatedAt,
        });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {

    const { emailFuncionario, password } = req.body;

    try {

        const funcionarioFound = await Funcionario.findOne({ emailFuncionario });
        const isMatch = await bcrypt.compare(password, funcionarioFound.password);
        if (!funcionarioFound || !isMatch)

        return res.status(400).json(["Usuario o contraseña incorrecta"]); 

        const token = await createAccessToken({ id: funcionarioFound._id }); // Crear token
        res.cookie("token", token); // Guardar el token en las cookies
        res.json({
        // Responder con un estado 200 y los siguientes datos
        //Para no mostrar el password
        // Parametros que se van a mostrar en el front
        _id: funcionarioFound._id,
        nombreFuncionario: funcionarioFound.nombreFuncionario,
        apellidoFuncionario: funcionarioFound.apellidoFuncionario,
        emailFuncionario: funcionarioFound.emailFuncionario,
        createdAt: funcionarioFound.createdAt,
        updatedAt: funcionarioFound.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

export const logout = (req, res) => {

    res.cookie("token", "", {
        // Limpiar las cookies
        expires: new Date(0), // Fecha de expiración
    });

    res.send("Haz cerrado sesión y limpiado cookies.");
    return res.sendStatus(204);
};

export const profile = async (req, res) => {
    // Perfil del usuario

    const funcionarioFound = await Funcionario.findById(req.funcionario.id);
    
    if (!funcionarioFound)
        return res.status(400).json({ message: "Funcionario no encontrado" });

    return res.json({
        id: funcionarioFound._id,
        nombreFuncionario: funcionarioFound.nombreFuncionario,
        apellidoFuncionario: funcionarioFound.apellidoFuncionario,
        emailFuncionario: funcionarioFound.emailFuncionario,
        createdAt: funcionarioFound.createdAt,
        updatedAt: funcionarioFound.updatedAt,
    });
};


export const verifyToken = async (req, res) => { // Verificar el token
    const {token} = req.cookies; // Obtener el token de las cookies

    if (!token) return res.status(401).json({ message: "Unauthorized" }); // Si no hay token, responder con un estado 401 y un mensaje de error

    jwt.verify(token, TOKEN_SECRET, async (err, funcionario) => { // Verificar el token
        if (err) return res.status(401).json({ message: "Unauthorized" }); // Si hay un error, responder con un estado 401 y un mensaje de error

        const funcionarioFound = await Funcionario.findById(funcionario.id); // Buscar el usuario por el id
        if (!funcionarioFound) // Si no se encuentra el usuario
        return res.status(400).json({ message: "Unauthorized" }); // Responder con un estado 400 y un mensaje de error

        return res.json({ // Responder con un estado 200 y los siguientes datos
        id: funcionarioFound._id,
        nombreFuncionario: funcionarioFound.nombreFuncionario,
        apellidoFuncionario: funcionarioFound.apellidoFuncionario,
        emailFuncionario: funcionarioFound.emailFuncionario,
        });
    }); 
}

export const getAllFuncionarios = async (req, res) => {
    try {
        const funcionarios = await Funcionario.find();
        console.log(funcionarios);
        res.status(200).json(funcionarios);
    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
        message: error.message,
        });
    }
}

export const deleteFuncionario = async (req, res) => {
    try {
        const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
        res.status(200).json(funcionario);
    } catch (error) {
        console.log("Error" + error.message);
        res.status(400).json({
        message: error.message,
        });
    }
}


