import axios from 'axios'

const API = 'https://medi-f3fk.onrender.com';

export const createAccount = async (data) => {
    try {
        const response = await axios.post(`${API}/auth/register`, data);
        console.log("Sucesso no cadastro!");
        alert("Usuário registrado com sucesso!")
        return response
    } catch (error) {
        alert("Ocorreu um erro! Tente com outro E-mail ou volte mais tarde.")
        console.error('Erro ao registrar usuário:', error);
    }
}