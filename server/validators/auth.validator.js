import z from "zod"; // Importamoms zod para validar los datos

export const registerSchema = z.object({

    nombreFuncionario: z
        .string({
        message: "El nombre del funcionario(a) es requerido",
        })
        .min(3, {
        message: "El nombre debe tener al menos 3 caracteres",
        }), 

    apellidoFuncionario: z
        .string({
        message: "El apellido del funcionario(a) es requerido",
        })
        .min(2, {
        message: "El apellido debe tener al menos 2 caracteres",
        }), 

    emailFuncionario: z
        .string({
        message: "El email del funcionario(a) es requerido",
        })
        .email({
        message: "Email no válido",
        }),
    
    password: z
        .string({
        message: "La contraseña es obligatoria",
        })
        .min(6, {
        message: "La contraseña debe tener al menos 6 caracteres",
        }), 
});

export const loginSchema = z.object({
    emailFuncionario: z 
        .string({
        message: "Email es requerido",
        })
        .email({
        message: "Email es inválido",
        }),
    password: z
        .string({
        message: "Password es requerido",
        })
        .min(6,{
        message: "La contraseña debe tener al menos 6 caracteres",
        
        })
});
