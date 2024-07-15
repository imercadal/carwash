import mongoose from "mongoose";

const FuncionarioSchema = new mongoose.Schema(
    {
        nombreFuncionario: {
            type: String,
            required: [true, "El nombre es requerido"],
        },
        apellidoFuncionario: {
            type: String,
            required: [true, "El apellido es requerido"],
        },
        emailFuncionario: {
            type: String,
            required: [true, "El correo electrónico es requerido"],
            unique: true, 
            lowercase: true,  
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Por favor ingresa un correo electrónico válido"
            }
        },
        password: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const Funcionario = mongoose.model("funcionario", FuncionarioSchema);

export default Funcionario;
