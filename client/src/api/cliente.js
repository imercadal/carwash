import axios from "./axios";


export const registrarClienteRequest = cliente => axios.post(`/clientes`, cliente)

export const getAllClientesRequest = () => axios.get("/clientes");

export const getClienteRequest = (id) => axios.get(`/clientes/${id}`);

export const updateClienteRequest = (id) => axios.put(`/clientes/${id}`);

export const deleteClienteRequest = (id) => axios.delete(`/clientes/${id}`);
