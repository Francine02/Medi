import axios from 'axios'

const API = 'https://medi-f3fk.onrender.com';
const token = localStorage.getItem('token');

const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
}

export const createAccount = async (data) => {
    try {
        const response = await axios.post(`${API}/auth/register`, data);
        console.log("Sucesso no cadastro!");
        return response;
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
    }
}