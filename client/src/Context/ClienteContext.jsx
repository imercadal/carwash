import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import {
    registrarClienteRequest,
    getAllClientesRequest,
    getClienteRequest,
    updateClienteRequest,
    deleteClienteRequest
} from "../api/cliente";

const ClienteContext = createContext();

export const useClientes = () => {

    const context = useContext(ClienteContext);

    if (!context) {
        throw new Error("useClientes must be used within a ClienteProvider");
    }

    return context;
};

export function ClienteProvider({ children }) {
    const [clientes, setClientes] = useState([]);

    const createCliente = async (cliente) => {
        try {
            const res = await registrarClienteRequest(cliente);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    const getAllClientes = async () => {
        try {
        const res = await getAllClientesRequest();
        setClientes(res.data);
        } catch (error) {
        console.error(error);
        }
    };

    const getCliente = async (id) => {
        try {
            const res = await getClienteRequest(id);
            if (res.status === 200) {
                return res.data;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const updateCliente = async (updatedCliente) => {
        try {
        const res = await updateClienteRequest(updatedCliente.id, updatedCliente);
        if (res.status === 200){
            setClientes(prevClientes => prevClientes.map(cliente => (cliente.id === updatedCliente.id ? updatedCliente : cliente)))
        }
        } catch (error) {
        console.error(error);
        }
    };

    const deleteCliente = async (id) => {
        try {
        const res = await deleteClienteRequest(id);
        if (res.status === 200) setClientes(clientes.filter((cliente) => cliente.id !== id));
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <ClienteContext.Provider
        value={{
            clientes,
            createCliente,
            getAllClientes,
            getCliente,
            updateCliente,            
            deleteCliente,
        }}
        >
        {children}
        </ClienteContext.Provider>
    );
    }

ClienteProvider.propTypes = {
    children: PropTypes.node.isRequired,
};