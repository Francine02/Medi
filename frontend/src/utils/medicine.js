import axios from 'axios'

const API = 'https://medi-f3fk.onrender.com';

const token = localStorage.getItem('token');

const config = {
    headers: {
        'Authorization': `Bearer ${token}`,
    }
}

export const getMedicines = async () => {
    try {
        const response = await axios.get(`${API}/medi/all`, config)
        console.log("Sucesso ao pegar todos os medicamentos!");
        return response
    } catch (error) {
        console.log("Ocorreu um erro ao pegar todos os medicamentos!")
    }
}