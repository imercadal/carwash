import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema(
    {
        nombreCliente: {
            type: String,
            required: [true, "El nombre del cliente es requerido."]
        },
        emailCliente: {
            type: String,
            required: [true, "El correo electrónico es requerido."],
            lowercase: true,
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Por favor, ingrese un correo electrónico válido."
            }
        },
        celularCliente: {
            type: String,
            required: [true, "El número de teléfono es requerido."],
            unique: true
        },
        vehiculosCliente: {
            patenteUno:{
                type: String
            },
            patenteDos:{
                type: String
            },
            patenteTres:{
                type: String
            }
        }
        
    },
    { timestamps: true }
);

const Cliente = mongoose.model("cliente", ClienteSchema);

export default Cliente;