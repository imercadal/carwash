import axios from "./axios";


export const registerRequest = funcionario => axios.post(`/register`, funcionario)

export const loginRequest = funcionario => axios.post(`/login`, funcionario)

export const verifyTokenRequest = () => axios.get(`/verify`)

export const getFuncionarioByIdRequest = funcionarioId => axios.get(`/funcionarios/${funcionarioId}`)

export const getAllFuncionariosRequest = () => axios.get(`/funcionarios/todos`)

export const updateFuncionarioRequest = funcionarioId => axios.put(`/funcionarios/${funcionarioId}`)

export const deleteFuncionarioRequest = funcionarioId => axios.delete(`/funcionarios/${funcionarioId}`)